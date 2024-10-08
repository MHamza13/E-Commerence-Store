const express = require("express");
const {
  createUser,
  loginUser,
  checkAuth,
  getAllUsers,
  resetPasswordRequest,
  resetPassword,
  logout, 
} = require("../controller/Auth");
const passport = require("passport");

const router = express.Router();

router
  .post("/signup", createUser)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/check", passport.authenticate("jwt"), checkAuth)
  .post('/logout', logout)
  .get("/users", getAllUsers)
  .post("/reset-password-request", resetPasswordRequest)
  .post("/reset-password", resetPassword);

exports.router = router;
