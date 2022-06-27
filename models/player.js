const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    
    name: {
        type: "string",
        required: true
    },
    age: {
        type: "number",
        required: true
    },
    role: {
        type: "string",
        required: true
    },
    inTeam: {
        type: "boolean",
        required: true,
        default: false
    }
    
})

module.exports = mongoose.model("Player", playerSchema);