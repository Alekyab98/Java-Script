const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
    Name: String,
    Brand: String,
    Price: Number
})
module.exports = mongoose.model("bag", bagSchema)