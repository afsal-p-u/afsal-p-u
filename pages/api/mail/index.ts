import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
  if (req.method == "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    const main = async () => {
      await transporter.sendMail({
        from: {
          name: "Portfolio",
          address: "afcompshd@gmail.com",
        },
        to: process.env.TO,
        subject: req.body.subject,
        html: `Contact Number: ${req.body.phone} <br>
              Email: ${req.body.email} <br>
              <br>
              Message: ${req.body.message}`,
      });
    };

    try {
      await main();
      return res.status(200).json({ message: 'success' })
    } catch (err) {
      return res.status(500).json({ message: "error" })
    }
  }
}
