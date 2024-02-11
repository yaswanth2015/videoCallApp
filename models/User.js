const { Schema, model } = require("mongoose")

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    socket: {
        type: String,
        default: null,
    }
})


const User = model("user", schema);

module.exports = User