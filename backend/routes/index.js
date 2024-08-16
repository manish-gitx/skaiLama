import express from "express"
import ProjectRoutes from "./ProjectRoutes.js"
import FileRoutes from "./FileRoutes.js"
import AuthRoutes from "./AuthRoutes.js"

const router=express.Router();

router.use('/project',ProjectRoutes);
router.use('/auth', AuthRoutes);
router.use('/file',FileRoutes);

export default router;