const mongoose = require("mongoose")


function connectToDatabase(url) {
    mongoose.connect(url)
    .then(()=>{
        console.log(`Successfully connected Database`)
    })
    .catch((e)=>{
        console.log(`Failed to connect to database`)
    })
}


module.exports = connectToDatabase