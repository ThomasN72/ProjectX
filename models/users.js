const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    usersname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    act: { type: Number, required: false },
    sat: { type: Number, required: false },
    gpa: { type: Number, require: false },
    location: { type: String },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;