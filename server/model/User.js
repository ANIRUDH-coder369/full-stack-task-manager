const mongoose = require("mongoose")

module.exports = mongoose.model("user", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true, trim: true },
    password: { type: String, require: true },
    active: { type: Boolean, default: true },
    mobile: { type: String, required: true },
    role: { type: String, enumn: ["admin", "employee"], default: "employee" },
    porfilePic: { type: String, },

}, { timestamps: true }))