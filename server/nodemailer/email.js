import nodemailer from "nodemailer";
import transporter from "../config/nodemailer.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
} from "./emailsTemplates.js";

//Sending email verification to user
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Verification Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken) ,
    });
    console.log("email send successfully", response)
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`)
  }
};

//send welcome email

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome Email",
      text: `Hello ${name}, with ${email},Welcome to our application! We're excited to have you on board.\n\nBest regards,\nTeam Dineo`,
    });
    console.log("Welcome email sent successfully", response)

  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`)
  }
}


//Sending password reset email

export const sendPasswordResetEmail = async (email, resetURL) => {
const recipient = [{ email }];
try {
  const recipient = [{ email }];
  const response = await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Password Reset Request",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  });
  
} catch (error) {
  console.error(`Error sending password reset email`, error);
  throw new Error(`Error sending password reset email: ${error}`)
}

}

//Sending password reset success email

export const sendResetSuccessEmail = async (email) => {
const recipient = [{ email }];
  try {
  
  const response = await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Password Reset Success",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });
  console.log("Password reset success email sent successfully", response)
} catch (error) {
  console.error(`Error sending password reset success email`, error);
  throw new Error(`Error sending password reset success email: ${error}`)
  
}
}