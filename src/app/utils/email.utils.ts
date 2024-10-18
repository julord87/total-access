import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,  // Cambia a false para utilizar STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  
  

type SendEmailDto = {
    sender: Mail.Address,
    receipents: Mail.Address[],
    subject: string,
    message: string
}

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, receipents, subject, message } = dto;

    console.log(process.env.EMAIL_HOST, process.env.EMAIL_PORT, process.env.EMAIL_USER);

    return await transport.sendMail({
        from: sender,
        to: receipents,
        subject,
        html: message,
        text: message
    });
}