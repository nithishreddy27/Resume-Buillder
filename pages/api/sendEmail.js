import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nithishreddy9848@gmail.com',
          pass: 'nithishhero',
        },
    });
    
    const mailOptions = {
    from: 'nithishreddy9848@gmail.com',
    to: 'nithishreddy0627@gmail.com',
    subject: 'New message from your website',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  console.log("insode",mailOptions);
  try {
    var d = await transporter.sendMail(mailOptions);
    console.log("d",d)
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' });
  }
}
