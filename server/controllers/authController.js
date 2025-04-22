import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookies } from "../utils/generateTokenAndSetCookies.js";
//import transporter from "../config/nodemailer.js"
import { sendVerificationEmail } from "../nodemailer/email.js";



export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours
    });

    await user.save();

    //jwt
    generateTokenAndSetCookies(res, user._id);
    //send verification email

   await sendVerificationEmail(user.email, verificationToken);

    {/*const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome Email",
      text: `Hello ${name},Welcome to our application! We're excited to have you on board.\n\nBest regards,\nTeam Dineo`,
    };

    await transporter.sendMail(mailOptions);
    */}

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async(req, res) => {

  const {code} = req.body;
  try {
    const user = await User.findOne({
        verificationToken: code,
        verificationTokenExpiresAt: {$gt: Date.now()}
    })
    if(!user){
        return res.status(400).json({success: false, message: "Expired or invalid verification code"})
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    
  } catch (error) {
    
  }  
}

export const login = (req, res) => {
  res.send("Hello from login controller!");
};

export const logout = (req, res) => {
  res.send("Hello from logout controller!");
};
