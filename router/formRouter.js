const express = require("express")
const formController = require("../controller/formcontrolers")
const router = express.Router()

router.post("/register", formController.register)
router.post("/clientTypes", formController.getTypes)
router.post("/find", formController.find)

module.exports = router