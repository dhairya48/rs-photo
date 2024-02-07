import nodemailer from 'nodemailer';

export default async function SendMail(req, res) {
  try {
    // Create a transporter
    const name = req.body.name
    const mail = req.body.mail
    const msg = req.body.message
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'developmentb441@gmail.com', // Your Gmail email
        pass: 'eqrx hhhj uswa wvlj' // Your Gmail password
      }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'developmentb441@gmail.com', // Sender address
      to: 'developmentb441@gmail.com', // List of receivers
      subject: `Name:${name}, mail:${req.body.email} : Enquiry`, // Subject line
      text: `${req.body.message}`, // Plain text body
    });

    console.log('Message sent: %s', info.messageId);
    res.send({ status: true, message: 'Email sent successfully', data: info });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error sending email' });
  }
};

