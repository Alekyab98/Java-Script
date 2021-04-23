const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
    Name:{
        type: String,
        required: [true, "bagname is Required"]
    },

    Brand: {
        type: String,
        required: [true, "bagbrand is Required"]
    },
    Price: {
        type: Number,
        min:[200,"Price of the bag should be 200"],
        max:[1500,"Price can be more than 1500"]
    }
})
module.exports = mongoose.model("bag", bagSchema)