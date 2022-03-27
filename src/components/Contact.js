import React from 'react'
import "../css/about.css";

const Contact = () => {
  return (
    <div>

              <section id="contact">
          <h2>Call me</h2>
          <div className="container-contact">
            <div className="Contact">
              <h3>Phone:</h3>
              <span><a href="tel:9840854187">(977)9840854187</a></span>
              <h3>Email:</h3>
              <span><a href="sanjivghising2@gmail.com">sanjivghising2@gmail.com</a></span>
            </div>
            <div className="formulario">
              <form className="form" id="my-form" action="https://formspree.io/f/xgerkjon" method="POST">
                <input type="email" placeholder="Email" name="email" required />
                <textarea placeholder="Message me" name="message" required defaultValue={""} />
                <input id="submit" type="submit" />
                <p id="my-form-status" />
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
