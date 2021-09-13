const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Scheam({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)