const express = require("express");
const router = express.Router();
const db = require("../config/db");


/* ===== TEST ROUTE ===== */
router.get("/", (req, res) => {
  res.send("User API working ✅");
});


/* ===== SIGNUP ===== */
router.post("/signup", (req, res) => {

const { name, email, password } = req.body;

const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

db.query(sql, [name, email, password], (err, result) => {

if (err) {
console.log(err);
return res.send("Signup Failed");
}

res.send("Signup Successful");

});

});


/* ===== LOGIN ===== */
router.post("/login", (req, res) => {

const { email, password } = req.body;

const sql = "SELECT * FROM users WHERE email=? AND password=?";

db.query(sql, [email, password], (err, result) => {

if (err) {
console.log(err);
return res.send("Server Error");
}

if (result.length > 0) {
res.send("Login Successful");
}
else {
res.send("Invalid Email or Password");
}

});

});


module.exports = router;