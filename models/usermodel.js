const mongoose = require("mongoose");
const userschema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "add name"],
    
    },

    email: {
        type: String,
        required: [true, "add emailid"],
        unique: [true, "it should be unique"]
    },

    employeeID: {
        type: Number,
        required: [true, "add employeeID"]
    },

    password: {
        type: String,
        required: [true, "add user password"]
    },
},
    {
        timestamps: true,
    }

);

module.exports = mongoose.model("User", userschema);