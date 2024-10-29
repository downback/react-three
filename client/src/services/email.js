import sgMail from "@sendgrid/mail"

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY)

export const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: "your_verified_sendgrid_email@example.com",
    subject,
    text,
  }
  await sgMail.send(msg)
}
