# Conversational Outfit Generator

## Introduction

The Conversational Outfit Generator is an innovative platform that utilizes the power of generative AI to offer outfit suggestions to users. With the use of OpenAI's API, the backend serves as the brain of the system, identifying outfits based on user preferences. The frontend provides a responsive user interface where individuals can interact in real-time with the chatbot, retrieving product searches and relevant images tailored to their choices.

## Diagram

![Diagram](https://github.com/thisispriyanshu/conversational-outfit-generator/blob/main/frontend/assets/Diagram.png)

## Tech Stack Used

- **Backend**: Express & Node.js (Powered by OpenAI's API), Python, Flask,
- **Frontend**: React.js with TypeScript & Bootstrap
- **Libraries and Tools**: TensorFlow, Keras, OpenCV, NumPy, Gunicorn
- **Deep Learning Model**: VGG16 (pre-trained model)

## Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/thisispriyanshu/conversational-outfit-generator
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd [directory-name]
   ```

3. **Backend Setup**:

   - Navigate to the backend folder:

     ```bash
     cd backend
     ```

   - Install necessary packages:

     ```bash
     npm install
     ```

   - Create a `.env` file in the root of the backend directory and add the following:
     ```
     API_KEY=your_openai_api_key
     PORT=desired_port_number
     ```

4. **Similar Product Model Setup**:

   - Navigate to the similar Image Model folder:

     ```bash
     cd similarImageModel
     ```

   - Create a virtual environment:

     ```bash
     python -m venv venv
     ```

   - Activate the venv:

     ```bash
     venv\Scripts\activate (for windows)
     ```

   - Install necessary packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Run app.py python file to start the server:
     ```bash
     python app.py
     ```

5. **Frontend Setup**:

   - Navigate to the frontend folder:

     ```bash
     cd frontend
     ```

   - Install necessary packages:
     ```bash
     npm install
     ```

## Running the App

1. **Running the Backend**:

   ```bash
   cd backend
   npm start
   ```

2. **Running the Similar Product Model**:

   ```bash
   cd similarImageModel
   python app.py
   Server PORT:  http://127.0.0.1:5000
   ```

3. **Running the Frontend**:
   ```bash
   cd frontend
   npm start
   ```

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Create a pull request from your fork to the main repository.
5. Ensure your PR has a clear title and description, and it follows the contribution guidelines.

_Your contributions and suggestions are welcome! Together, we can make the Conversational Outfit Generator even better!_

```

```
