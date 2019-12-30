require('dotenv').config()

module.exports = {
  env: {
    RECAPTCHA: process.env.RECAPTCHA,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_TO: process.env.MAILGUN_TO,
  },
  poweredByHeader: false,
}