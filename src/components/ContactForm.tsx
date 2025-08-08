import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  // Create state variables for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // This function will run when the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevents the default browser behavior of refreshing the page
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // For now, we'll just log the data to the console
    console.log('Form data submitted:', formData);

    // Here you would typically send the data to a server
    alert('Thank you for your message! Check the console to see the data.');
    
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name} // The input's value is controlled by our state
            onChange={(e) => setName(e.target.value)} // Update state on every keystroke
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;