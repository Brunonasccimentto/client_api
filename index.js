const express = require('express');
const find = require('./controller/formcontrolers');
const formController = require('./controller/formcontrolers');
const formRouter = require("./router/formRouter")
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));

app.use('/form', formRouter)

app.listen(port, () => console.log(` app listening on port ${port}!`))

