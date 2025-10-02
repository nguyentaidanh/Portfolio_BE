const transporter = require("../config/mailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
    const { user_name, user_email, message } = req.body;

    try {
        const info = await transporter.sendMail({
            from: `"${user_name}" <${user_email}>`,
            to: process.env.TO_EMAIL,
            subject: "Portfolio Contact",
            text: message,
            html: `<p><b>${user_name}</b> (${user_email})</p><p>${message}</p>`,
        });

        console.log("✅ Email sent:", info.messageId);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("❌ Error sending email:", err);
        res.status(500).json({ success: false, message: "Failed to send email", error: err.message });
    }
};

module.exports = { sendEmail };   // ✅ đúng
