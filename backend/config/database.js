import mongoose from 'mongoose';
import dotenv from 'dotenv'

// Initializing the environment configurations required for the project


//connecting mongodb
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });

export default mongoose;
