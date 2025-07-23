const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["USER", "ADMIN", "SALON_OWNER"], default: "USER" },
});

module.exports = mongoose.model("User", userSchema);
