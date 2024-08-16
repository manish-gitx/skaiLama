

import express from 'express';
import  verifyUserAuth  from '..//utils/middleware/verifyUserAuth.js';
import { createFile , fetchFiles , fetchFile , editFile , deleteFile } from  '../controllers/FileController.js'

const router = express.Router();


router.post('/file/:projectId',verifyUserAuth,createFile)
router.get('/files/:projectId',verifyUserAuth,fetchFiles)
router.get('/file/:projectId/:fileId',verifyUserAuth,fetchFile)
router.put('/:projectId/file/:fileId/update-transcript',verifyUserAuth,editFile)
router.delete('/:projectId/file/:fileId',verifyUserAuth,deleteFile)