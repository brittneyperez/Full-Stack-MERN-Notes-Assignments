const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player's name is required"],
        minlength: [2, "Player's name must be at least 2 characters"],
        maxlength: [255, "Player's name is too long."],
    },
    preferredPosition: {
        type: String,
        required: [true, "Player's preferred position is required"],
        minlength: [2, "Player's preferred position must be at least 2 characters"],
        maxlength: [50, "Player's preferred position is too long."],
    },
    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
}, { timestamps:true })

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;