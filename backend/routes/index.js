import express from "express"
import ProjectRoutes from "./ProjectRoutes"
import FileRoutes from "./ProjectRoutes"

const router=express.Router();

router.use('/project',ProjectRoutes);
router.use('/file',FileRoutes);