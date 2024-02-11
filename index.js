const express = require("express")
const http = require("http")
const app = express()
const path = require("path")
const connectToDatabase = require("./ConnectToDataBase") 
const routes = require("./routes/UserRoutes")
var bodyParser = require('body-parser')


const httpServer = http.createServer(app)
const port = process.env.port || 8000

//****  CONNECT TO DATABASE  ****
connectToDatabase("mongodb://localhost:27017/videoCall")




//**** SET VIEWS & ENGINES  ****
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.static(path.join(__dirname, "public")))



//****  SET MIDDLEWARES  ****
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())




//****  SET ROUTES  ****
app.use("", routes);




















httpServer.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})










