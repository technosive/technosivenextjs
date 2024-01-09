import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface Email {
  name: string;
  email: string;
  phone?: string;
  org?: string;
  message?: string;
  subscriber: boolean;
}

export async function POST(request) {
  try {
    const { name, email, phone, org, message, subscriber }: Email =
      await request.json();

    const smtpTransport = nodemailer.createTransport({
      service: process.env.HOST,
      port: process.env.PORT,
      auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL_ADDRESS,
      to: process.env.RECEIVER_EMAIL_ADDRESS,
      subject: "Lead From Website",
      html: `${
        subscriber
          ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <h1 style="color: #333;">New Subscriber</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          `
          : `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <h1 style="color: #333;">Enquiry</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization:</strong> ${
              org ? `${org}` : `Not Provided by User`
            }</p>
            <p><strong>Phone:</strong> ${
              phone ? `${phone}` : `Not Provided by User`
            }</p>
            <p><strong>Message:</strong> ${
              message ? `${message}` : `Not Provided by User`
            }</p>
          </div>
          `
      }`,
    };

    await smtpTransport.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: error.status });
  }
}
