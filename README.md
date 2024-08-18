# SkaiLama - Podcast AI Assistant

**SkaiLama** is a web application designed to empower podcasters by leveraging an AI assistant to optimize and supercharge their content distribution. The platform features a frontend built with **React** and a backend powered by **Express.js**.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB**

### Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:manish-gitx/skaiLama.git
   cd skaiLama
   ```

2. **Install Dependencies**
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables**
   
   In the `backend` directory, create a `.env` file with the following content:
   ```env
   PORT=3005
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret_key` with a secure, random string for JWT token generation.

4. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```

5. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to start using SkaiLama.

## Features

- **User Authentication:** Secure login and registration functionality.
- **Project Management:** Create and manage podcast projects efficiently.
- **File Upload & Transcription:** Upload audio files and get transcriptions powered by AI.
- **AI-Powered Distribution:** Receive tailored suggestions for podcast distribution to reach a wider audience.

## Built With

- [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [**Express.js**](https://expressjs.com/) - A web application framework for Node.js.
- [**MongoDB**](https://www.mongodb.com/) - A NoSQL database for storing your data.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.

## Environment Variables

To run the backend, ensure the following environment variables are set in your `.env` file:

- **`PORT`**: The port number on which the backend server will run (default: 3005).
- **`MONGODB_URL`**: The connection string for your MongoDB database.
- **`JWT_SECRET`**: A secret key used for generating and verifying JWT tokens.

---

This version provides a more polished and structured presentation, making it easier for others to understand and contribute to your project. Let me know if there's anything else you'd like to adjust!
