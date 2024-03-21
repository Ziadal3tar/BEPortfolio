import { Router } from "express";


import { fileValidation, HME, myMulter } from "../../services/multer.js";


import * as projectControl from './controller/project.controller.js'
const router = Router()
router.get("/", (req, res) => {
    res.status(200).json({ message: 'project Module' })
})

router.post("/addProject",myMulter(fileValidation.image).array('image'), HME, projectControl.addProject)
router.put("/updateProject/:_id",myMulter(fileValidation.image).array('image'), HME, projectControl.updateProject)
router.post("/sendEmail", projectControl.sendemail)
router.get("/open/:password", projectControl.open)
router.get("/getAllProjects", projectControl.getAllProjects)
router.put("/deleteImg", projectControl.deleteImg)
router.put("/replaceImg",myMulter(fileValidation.image).single('image'), HME,projectControl.replaceImg)
router.delete("/deleteProject/:_id", projectControl.deleteProject);

export default router