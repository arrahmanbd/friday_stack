import nodemailer from 'nodemailer'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.example.com', // e.g. Gmail: smtp.gmail.com
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'your-email@example.com',
//       pass: 'your-email-password' // or App Password
//     }
//   })

//   await transporter.sendMail({
//     from: `"${body.name}" <${body.email}>`,
//     to: 'your-email@example.com', // your email to receive messages
//     subject: 'New Contact Form Message',
//     text: body.message,
//     html: `<p>${body.message}</p><p>From: ${body.name} (${body.email})</p>`
//   })

//   return { success: true }
// })
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Choose provider: 'gmail', 'outlook', 'yahoo'
  const provider = body.provider || 'yahoo'

  let transporterConfig: any = {}

  if (provider === 'gmail') {
    transporterConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    }
  } else if (provider === 'outlook') {
    transporterConfig = {
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS
      }
    }
  } else if (provider === 'yahoo') {
    transporterConfig = {
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.YAHOO_USER,
        pass: process.env.YAHOO_PASS
      }
    }
  } else {
    throw new Error('Unsupported email provider')
  }

  const transporter = nodemailer.createTransport(transporterConfig)

  await transporter.sendMail({
    from: `"${body.name}" <${body.email}>`,
    to: body.toEmail || process.env.GMAIL_USER, // fallback to Gmail user
    subject: body.subject || 'New Contact Form Message',
    text: body.message,
    html: `<p>${body.message}</p><p>From: ${body.name} (${body.email})</p>`
  })

  return { success: true, message: `Email sent via ${provider}` }
})
