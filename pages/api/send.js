const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
const to = process.env.MAILGUN_TO
const mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

export default async function(req, res) {
  const { name, email, interest, budget, message } = req.body
  const text = "interest: " + interest + "\n\n" + "budget: " + budget + "\n\n"
    + "message: " + "\n" + message

  const data = {
    to: to,
    from: `${name} <${email}>`,
    subject: `Contact From - ${name}`,
    text: text,
    html: `
      <b>interest: </b> ${interest}<br/>
      <b>budget: </b> ${budget}<br/>
      <b>message: </b>
      <p>${message}</p>
    `
  }

  mailgun.messages().send(data, function (error, body) {
    if(error) {
      res.status(400).send(error)
    }
    else {
      res.status(200).send(body)
    }
  })
}
