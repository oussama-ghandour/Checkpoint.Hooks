


import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <h2 className="text-important">Contact Us</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Text" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Message</label>
          <textarea rows="5" cols="40"></textarea>
          <button>Send</button>
        </form>
      </section>
    </div>
  );
}
export default Contact;