import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // TLS istifadə etmək üçün false, STARTTLS avtomatik
  auth: {
    user: "apikey", // SendGrid SMTP üçün username həmişə "apikey"
    pass: process.env.SENDGRID_API_KEY,
  },
});

transporter.verify().then(
  () => console.log("SendGrid transporter ready"),
  (err) => console.warn("SendGrid transporter error:", err.message)
);

export const sendEmail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html,
  });
  return info;
};
