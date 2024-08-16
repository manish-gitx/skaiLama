import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from './routes/index.js';

// Initializing the environment configurations required for the project
dotenv.config();

// Connecting to the database
import './config/database.js';

const app = express();

const port = 3005;

// Helper middlewares
app.use(express.json());
app.use(cookieParser());

// Adding CORS security
app.use(
  cors({
    origin: '*', // Update this to your frontend URL
    credentials: true,
  })
);

// Routes
app.use('/api', router);

// 404 Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});