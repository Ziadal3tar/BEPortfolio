import { Router } from "express";

import * as EVControl from '../EV/controller/EV.controller.js'
const router = Router()
router.get("/", (req, res) => {
    res.status(200).json({ message: 'EV Module' })
})


// router.get("/getCookieID", EVControl.getCookieID)

export default router