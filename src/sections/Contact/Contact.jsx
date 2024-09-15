import React, { useState } from 'react'
import styles from './ContactStyles.module.css'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit= () =>{

        setEmail("")
        setName("")
        setMessage("")
    }

  


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/manwkpyj" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea

             value={message}
            onChange={(e)=>setMessage(e.target.value)}
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input onClick={onSubmit} className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact
