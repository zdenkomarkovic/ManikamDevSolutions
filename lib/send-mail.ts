"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

const MIN_SUBMIT_TIME_MS = 2000;

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
  honeypot,
  formStartTime,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
  honeypot?: string;
  formStartTime?: number;
}) {
  if (honeypot) {
    console.log("Blocked suspected bot submission: honeypot filled", honeypot);
    return { messageId: "spam-ignored" };
  }

  if (formStartTime && Date.now() - formStartTime < MIN_SUBMIT_TIME_MS) {
    console.log(
      "Blocked suspected bot submission: submitted too fast",
      Date.now() - formStartTime,
      "ms"
    );
    return { messageId: "spam-ignored" };
  }

  try {
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || SITE_MAIL_RECIEVER,
      subject: subject,
      text: text,
      html: html ? html : "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", SITE_MAIL_RECIEVER);
    return info;
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }
}
