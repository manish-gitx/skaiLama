import mongoose from 'mongoose';
import dotenv from 'dotenv'

// Initializing the environment configurations required for the project


//connecting mongodb
mongoose.connect("mongodb+srv://mansih:8Mmanish12@cluster0.tebut1m.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });

export default mongoose;
