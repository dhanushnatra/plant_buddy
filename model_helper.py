
import pickle
import torch
import torch.nn as nn
from PIL import Image
from torchvision import transforms, models

# Image preprocessing pipeline
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                        std=[0.229, 0.224, 0.225])
])

# Load the model architecture
model_loaded = nn.Sequential(
    models.resnet18(weights='IMAGENET1K_V1'),  # Updated syntax
    nn.Linear(1000, 512), 
    nn.ReLU(),
    nn.Linear(512, 38),
    nn.LogSoftmax(dim=1)
)

# Setup device and load model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_loaded.to(device)

# Load the saved model weights
try:
    model_loaded.load_state_dict(torch.load('plant_disease_model_epoch2.pth', map_location=device))
    model_loaded.eval()
    print(f"Model loaded successfully on {device}")
except FileNotFoundError:
    print("Error: Model file 'plant_disease_model_epoch2.pth' not found")
    raise
except Exception as e:
    print(f"Error loading model: {e}")
    raise

# Load class labels
try:
    with open('classes.pkl', 'rb') as f:
        classes = pickle.load(f)
    print(f"Loaded {len(classes)} class labels")
except FileNotFoundError:
    print("Error: Classes file 'classes.pkl' not found")
    raise
except Exception as e:
    print(f"Error loading classes: {e}")
    raise

def predict(img_path):
    """
    Predict plant disease from an image.
    
    Args:
        img_path (str): Path to the image file
        
    Returns:
        dict: Dictionary containing prediction results with class index, 
              class name, and confidence scores
    """
    try:
        # Load and preprocess the image
        img = Image.open(img_path).convert('RGB')
        img_tensor = transform(img).unsqueeze(0).to(device)
        
        # Make prediction
        with torch.no_grad():
            output = model_loaded(img_tensor)
            probabilities = torch.exp(output)  # Convert log probabilities to probabilities
            pred_class = output.argmax(dim=1).item()
            confidence = probabilities.max().item()
        
        # Get class name
        predicted_class_name = classes[pred_class]
        
        print(f"Predicted class: {pred_class}")
        print(f"Predicted class name: {predicted_class_name}")
        print(f"Confidence: {confidence:.4f}")
        
        return {
            'predicted_class_index': pred_class,
            'predicted_class_name': predicted_class_name,
            'confidence': confidence,
            'all_probabilities': probabilities.squeeze().cpu().numpy().tolist()
        }
        
    except FileNotFoundError:
        raise FileNotFoundError(f"Image file not found: {img_path}")
    except Exception as e:
        raise RuntimeError(f"Prediction failed: {str(e)}")