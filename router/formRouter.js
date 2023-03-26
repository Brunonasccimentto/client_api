const express = require("express")
const formController = require("../controller/formcontrolers")
const router = express.Router()

router.post("/register", formController.register) //registrar cliente
router.get("/clientTypes", formController.getTypes) //consultar tipos de cliente
router.get("/find/:value", formController.find) //buscar cliente

module.exports = router