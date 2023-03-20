import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_svr0r4f",
        "template_r9erehl",
        form.current,
        "ZQd3t61siELS9TmDL"
      )
      .then(
        (result) => {
          alert("mail sent");
        },
        (error) => {
          // show the user an error
        }
      );
    console.log("");
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailContactForm;
