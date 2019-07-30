const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false
    }
})
const tasks = mongoose.model("tasks", taskSchema)
module.exports = tasks
