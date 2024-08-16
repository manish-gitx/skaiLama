import mongoose from "mongoose";
import File from "../models/fileSchema.js";
import Project from "../models/projectSchema.js";
//upload file
export const createFile = async (req, res) => {
  try {
    const { userId } = req?.decodedUser;
    const { projectId } = req.params;
    const { fileName, fileDescription } = req.body;

    const doc = await File.create({
      userId: userId,
      projectId: projectId,
      fileName,
      fileDescription,
    });

    // Update the project's updatedAt timestamp
    await Project.findByIdAndUpdate(projectId, {}, { new: true, timestamps: true });

    res.status(200).json({ success: true, message: "file created", doc });
  } catch (error) {
    console.error(`Error in file controller:`, error);
    res.status(500).json({ success: false, message: `Failed in file controller: ${error.message}` });
  }
};
  // fetching files
  export const fetchFiles = async (req, res) => {
    try {
      const { userId } = req?.decodedUser;
      const { projectId } = req?.params;
  
      const FileData = await File.find({
        projectId: projectId,
        userId:userId,
      });
  
      res
        .status(200)
        .json({ success: true, message: "files fetched", data: FileData });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  // fetching filee
  export const fetchFile = async (req, res) => {
    try {
      const { projectId, fileId } = req.params;
  
      const FileData = await File.findOne({
        _id: fileId,
        projectId: projectId,
      });
  
      res
        .status(200)
        .json({ success: true, message: "file fetched", data: FileData });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  //edit file
  export const editFile = async (req, res) => {
    try {
      const { projectId, fileId } = req.params;
      const { fileName, fileDescription } = req.body;
  
      const doc = await File.updateOne(
        {
          _id: fileId,
          projectId: projectId,
        },
        {
          $set: {
            fileName,
            fileDescription,
          },
        }
      );
  
      res.status(200).json({ success: true, message: "file updated", doc });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  //delete file
  export const deleteFile = async (req, res) => {
    try {
      const { projectId, fileId } = req.params;
  
  
      const doc = await File.deleteOne({
        _id: fileId,
        projectId: projectId
      });
  
  
      res.status(200).json({ success: true, message: "file deleted", doc });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  