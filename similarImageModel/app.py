from flask import Flask, request, jsonify
import cv2
import numpy as np
import requests
from tensorflow.keras.applications import VGG16
from tensorflow.keras.applications.vgg16 import preprocess_input
from tensorflow.keras.preprocessing import image
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load the VGG16 model
model = VGG16(weights='imagenet', include_top=False)

# Function to load and preprocess an image from URL
def load_and_preprocess_image(url):
    response = requests.get(url)
    img = cv2.imdecode(np.frombuffer(response.content, np.uint8), -1)
    img = cv2.resize(img, (224, 224))
    img = image.img_to_array(img)
    img = preprocess_input(img)
    return img

# Function to calculate cosine similarity between two images
def calculate_similarity(img1, img2):
    features1 = model.predict(np.array([img1]))
    features2 = model.predict(np.array([img2]))
    return cosine_similarity(features1.reshape(1, -1), features2.reshape(1, -1))[0][0]

@app.route('/find_similar', methods=['POST'])
def find_similar():
    data = request.get_json()
    reference_image_url = data.get('reference_image')
    image_urls = data.get('image_urls', [])

    reference_img = load_and_preprocess_image(reference_image_url)

    similar_images = []

    for url in image_urls:
        img = load_and_preprocess_image(url)
        similarity = calculate_similarity(reference_img, img)
        if similarity > 0.7:  # Adjust the threshold to determine similarity
            similar_images.append(url)

    return jsonify({'similar_images': similar_images})

if __name__ == '__main__':
    app.run(debug=True)
