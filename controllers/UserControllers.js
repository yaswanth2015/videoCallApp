const User = require("../models/User")


function getUsers() {
    return async (req,res) => {
        const users = await User.find({})
        return res.status(200).json(users);
    }
}



module.exports = {
    getUsers,
}