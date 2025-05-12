import config from '../../config'
import { TMessage } from './message.interface'
import nodemailer from 'nodemailer'

const sendMessageIntoMail = async (message: TMessage) => {



  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.nodem_user,
      pass: config.nodem_pass,
    },
  })

  await transporter.sendMail({
    from: message.email,
    to: config.nodem_user,
    subject: `Message from a Potential Client/Recruiter ${message.name}`,
    text: message.message, // plain‑text body
    html: `
  
    <p style="font-size: 14px;">${message.message}</p>
    <p style="font-size: 18px;width: 100%; border-bottom: 2px solid white;"></p>
    <p style="font-size: 18px; color: light-gray;">Sender: ${message.email}</p>
    `, // HTML body
  })    

 return null;
}

export const MessageServices = {
  sendMessageIntoMail,
}
