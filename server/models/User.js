const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  alxAffiliation: {
    type: String,
    required: true,
    enum: ['Learner', 'Graduate', 'Neither']
  },
  teamStatus: {
    type: String,
    required: true,
    enum: ['Already has a team', 'Seeking teammates']
  },
  strengths: {
    type: String,
    required: true,
    trim: true
  },
  roleType: {
    type: String,
    required: true,
    enum: ['Developer', 'Creative', 'Manager', 'Entrepreneur', 'Other']
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  qrCode: {
    type: String,
    unique: true
  },
  ticketNumber: {
    type: String,
    unique: true
  },
  checkInStatus: {
    type: Boolean,
    default: false
  },
  checkInTime: {
    type: Date
  }
});

module.exports = mongoose.model('User', userSchema);
