const express = require("express")
const http = require("http")
const app = express()


const httpServer = http.createServer(app)
const port = process.env.port || 8000

//****  CONNECT TO DATABASE  ****






//****  SET MIDDLEWARES  ****






//****  SET ROUTES  ****
app.use("")




















httpServer.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})










