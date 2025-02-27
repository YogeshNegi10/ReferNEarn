
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());



// Email Notification Function
const sendReferralEmail = async ( referee_email, referrer_Name, message) => {

   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
     },
   });
 
   const mailOptions = {
     from: process.env.EMAIL_USER,
     to: referee_email,
     subject: "You've Been Referred to a Course!",
     text: `Hi ${ referee_email},\n\nYour friend ${referrer_Name} has referred you to this amazing course!\n\nCheck it out and enroll today! \n\n Message,\n ${message}`,
   };
 
   await transporter.sendMail(mailOptions);
 };

// Create a referral
app.post("/referrals", async (req, res) => {
  try {
    const { course_Name,referrer_Name, referrer_email,  referee_email, message } = req.body;

    // Validate input
    if (!course_Name || !referrer_Name || !referrer_email || !referee_email || !message) {
      
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email already exists
    const existingReferral = await prisma.referal.findUnique({
      where: { referrer_email },
    });

    if (existingReferral) {
      return res.status(400).json({ error: "This email has already referred someone" });
    }

    // Save to database
    const referral = await prisma.referal.create({
      data: { course_Name, referrer_Name, referrer_email,referee_email, message },
   
    });

   await sendReferralEmail( referee_email, referrer_Name, message);

    res.status(201).json({ message: "Referral submitted and email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Could not save referral or send email" });
  }
});


// Get all referrals
app.get("/referrals", async (req, res) => {
  try {
    const referrals = await prisma.referal.findMany();
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch referrals" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


