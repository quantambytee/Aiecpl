const mongoose = require('mongoose');

const userApplySchema = new mongoose.Schema({
  gender: {
    type: String,
    
    enum: ['Male', 'Female', 'Other']
  },
  dob: {
    type: Date,
    
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  educationLevel: {
    type: String,
    required: true,
    enum: ['Secondary School Diploma', 'College Diploma', 'Bachelor Degree', 'Master Degree', 'MBA', 'Others']
  },
  englishLevel: {
    type: String,
    required: true,
    enum: ['N/A', 'A1-Beginner', 'A2-Elementry', 'B1-Intermediate', 'B2-Upper-Intermediate', 'C1-Advanced', 'C2-Proficent', 'Native']
  },
  workExperience: {
    type: Number,
    required: true
  },
  annualBudget: {
    type: String, // Consider changing to Number if you're only expecting numerical values
    required: true
  },
  message: {
    type: String
  }
});

const User = mongoose.model('UserApply', userApplySchema);

module.exports = User;
