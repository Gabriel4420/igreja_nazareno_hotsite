import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Seu e-mail do Gmail
      pass: process.env.GMAIL_PASS, // Senha do aplicativo gerada pelo Gmail
    },
    tls: {
      rejectUnauthorized: false 
    }
  });