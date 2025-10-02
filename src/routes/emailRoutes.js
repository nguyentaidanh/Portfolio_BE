const express = require("express");
const rateLimit = require("express-rate-limit");
const { sendEmail } = require("../controllers/emailController"); // ✅ destructure đúng

const router = express.Router();

const emailLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many requests, please try again later.",
});

router.post("/send-email", emailLimiter, sendEmail); // ✅ sendEmail là function

module.exports = router;
