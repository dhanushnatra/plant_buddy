from flask import Flask, request, jsonify,render_template
from flask import send_from_directory
from model_helper import predict
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from flask import send_file
from recommendation import get_recs
from random import randint



app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/',methods=['GET'])
def send_folder():
    """ 
    Simple index route to check if the server is running.
    
    Returns:
        Response: A welcome message.
    """
    return send_from_directory('static', 'index.html')


@app.route('/<path:filename>', methods=['GET'])
def send_static_file(filename):
    """ 
    Serve static files from the 'static' directory.
    
    Args:
        filename (str): The name of the file to serve.
        
    Returns:
        Response: The static file response.
    """
    return send_from_directory('static', filename, as_attachment=True)


@app.route('/predict', methods=['POST','GET'])
def predict_route():
    """ 
    Endpoint to handle image prediction requests.
    
    Expects a POST request with an image file.
    """
    if request.method == 'GET':
        return ""
    if 'image' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['image']
    print(file.filename)

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    try:
        # Save the uploaded file temporarily
        filename = secure_filename(file.filename)
        filepath = os.path.join('uploads', filename)
        file.save(filepath)
        print(f"File saved to {filepath}")
        
        result = predict(filepath)
        result.update({
            "healthScore": randint(40, 70) if result.get("disease_name") else randint(70, 100)
        })

        print(result)
       
        # Clean up the saved file
        os.remove(filepath)
        
        return jsonify({
            'status': result.get('plant_name', 'unknown'),
            'confidence': result.get('healthScore', 0),
            'diseaseName': result.get('diseaseName',"Unknown"), 
            'healthScore': result.get('healthScore'),
            'recommendations': get_recs(result.get('diseaseName')),
            'analysisDetails': result.get('analysisDetails', {}),
            }),200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == "__main__":
    # Ensure the uploads directory exists
    
    
    app.run(host='0.0.0.0',release=True)