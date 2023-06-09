const express = require('express');
const formRouter = require("./router/formRouter")
const cors = require("cors")
const app = express()
const multer = require("multer")
const upload = multer()
const port = 3000

app.use(cors())

app.use('/form', upload.any() ,formRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`))

