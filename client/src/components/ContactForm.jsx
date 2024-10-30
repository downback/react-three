import React from "react"
import axios from "axios"
import { Formik, Form, Field } from "formik"

function TestContact() {
  const sendMail = (values, { resetForm }) => {
    axios
      .get("http://localhost:5000/", {
        params: {
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
      })
      .then(() => {
        // success
        console.log("Email sent successfully")
        resetForm()
      })
      .catch(() => {
        console.log("Failed to send email")
      })
  }

  return (
    <div>
      <Formik
        initialValues={{ email: "", subject: "", message: "" }}
        onSubmit={sendMail}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="email"
              placeholder="Sender Email"
              required
            />

            <Field type="text" name="subject" placeholder="Subject" required />

            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              required
            />

            <button type="submit">Send Email</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestContact
