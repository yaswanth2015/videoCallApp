const express = require("express")

const router = express.Router()
const { getUsers } =  require("../controllers/UserControllers")

router
    .route("/")
    .get((req,res) => {
        console.log("hello")
        return res.redirect("/login")
    })

router
    .route("/login")
    .get((req,res) => {
        return res.render("partials/login.ejs");
    })
    .post((req,res) => {
        console.log(req.body)
        return res.status(200).json({
            message: "message received successfull",
        })
    })

module.exports = router