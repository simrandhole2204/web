// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // 'user', 'admin'
  profile: {
    education: String,
    career: String,
    interests: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
