// utils/logic.js

const validateEmail = (email) => {
  return email.includes('@university.edu');
};

const hashPassword = async (password) => {
  return `hashed_${password}`;
};

// Intentional bug: Returning a string instead of a percentage calculation
const calculateGroupFullness = (current, max) => {
    return "Not Calculated"; 
};

// This matches the "require" in your test file
module.exports = { 
  validateEmail, 
  hashPassword, 
  calculateGroupFullness 
};