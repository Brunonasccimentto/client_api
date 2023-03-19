const express = require('express');
const formRouter = require("./router/formRouter")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.use('/form', formRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`))

