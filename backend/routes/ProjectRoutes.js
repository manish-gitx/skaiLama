import express from 'express';
import { verifyUser } from '../middleware/verifyUser.js';
import { createProject , fetchProjects , fetchProject }from  '../controllers/ProjectController.js'

const router = express.Router();

//create project
router.post('/create',verifyUser,createProject)
router.get('/',verifyUser,fetchProjects)
router.get('/:projectId',verifyUser,fetchProject)