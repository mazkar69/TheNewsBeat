//To generate token.
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();


const key = process.env.KEY;

const generateToken = (id) => {
  return jwt.sign({ id }, key, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;