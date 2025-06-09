import express, { Router } from "express";
import projectController from "../controller/project.controller";

const router:Router = express.Router();

router.route("/add").post(projectController.addProject)

export default router