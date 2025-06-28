import numpy as np

from PIL import Image
from keras.models import load_model

MODEL_PATH = "plant_buddy.h5"

model= load_model(MODEL_PATH)
IMAGE_SIZE = (128, 128)


def predict(image):
    """
    Predict using the TFLite model.
    
    Args:
        image: Image file path 
        
    Returns:
        numpy array: Model prediction output
    """
    try:
        img = Image.open(image).convert("RGB")
        img = img.resize(IMAGE_SIZE)
        img_array = np.array(img) / 255.0
        img_array = img_array.reshape(1, 128, 128, 3)

        prediction = model.predict(img_array, verbose=0)
        class_index = np.argmax(prediction)
        confidence = float(np.max(prediction))

        disease_name = np.load("classes.npy")[class_index]
        health_pct = round((1 - confidence) * 100, 2) if "healthy" not in disease_name else 100
        disease_pct = round(confidence * 100, 2) if "healthy" not in disease_name else 0

        return {
            "disease_name":str(disease_name),
            "health_pct":health_pct,
            "disease_pct":disease_pct
        }

    except Exception as e:
        print("❌ Error:", e)
    except Exception as e:
        raise RuntimeError(f"Prediction failed: {str(e)}")