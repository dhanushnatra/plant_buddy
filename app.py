from flask import Flask, request, jsonify
from tflite_model import predict
from werkzeug.utils import secure_filename
from PIL import Image
import os
from flask_cors import CORS
from flask import send_file
from llama_helper import ollama_out

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/', methods=['GET'])
def index():
    """
    Simple index route to check if the server is running.
    """
    return jsonify({"message": "Welcome to the Plant Buddy API!"}), 200


@app.route('/get_audio',methods=['POST'])
def get_audio():
    """
    Endpoint to handle audio file requests.
    
    Expects a POST request with a text input and language parameter.
    """
    try:
        data = request.json
        text = data.get('text', '')
        lang = data.get('lang', 'english')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        # Here you would implement the logic to convert text to speech
        # For now, we will just return a dummy response
        audio_file_path = f"audio_{lang}.mp3"  # Placeholder for actual audio file generation
        
        return send_file(audio_file_path, mimetype='audio/mpeg')
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/predict', methods=['POST'])
def predict_route():
    """
    Endpoint to handle image prediction requests.
    
    Expects a POST request with an image file.
    """
    if 'image' not in request.form:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.form['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    try:
        # Save the uploaded file temporarily
        filename = secure_filename(file.filename)
        filepath = os.path.join('uploads', filename)
        file.save(filepath)
        
        # Predict using the TFLite model
        result = predict(filepath)
        print(result)
        result.update({
            "ollama_output": ollama_out(result['disease_name'])
        })
        # Clean up the saved file
        os.remove(filepath)
        
        return jsonify({
            "disease_name": result['disease_name'],
            "health_pct": result['health_pct'],
            "disease_pct": result['disease_pct'],
            "ollama_output": result['ollama_output']
            }),200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == "__main__":
    # Ensure the uploads directory exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    
    app.run(debug=True, host='0.0.0.0', port=3000)