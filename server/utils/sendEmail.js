import nodemailer from "nodemailer";

const createTransporter = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("Mail transporter ready");
  } catch (err) {
    console.warn("Mail transporter error:", err.message);
  }

  return transporter;
};

export const sendEmail = async (to, subject, html) => {
  const transporter = await createTransporter();
  const info = await transporter.sendMail({
    from: `"Kinaci" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
  return info;
};
