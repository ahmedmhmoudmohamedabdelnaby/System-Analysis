import React, { useState, useEffect } from "react";
import classes from "./feedback.module.css";
import api from "../../api";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = { name, email, message: feedbackMessage };
    try {
      await api.createFeedback(feedbackData);
      setFeedbackSubmitted(true);
    } catch (error) {
      setFeedbackError(
        error?.response?.data?.message ||
          "Failed to submit feedback. Please try again later."
      );
      console.error("Error submitting feedback:", error);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const contactData = { name, email, message: contactMessage };
    try {
      await api.createContact(contactData);
      setContactSubmitted(true);
    } catch (error) {
      setContactError("Failed to submit contact message. Please try again later.");
      console.error("Error submitting contact message:", error);
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Feedback</h2>
      {feedbackSubmitted ? (
        <p className={classes.success}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleFeedbackSubmit} className={classes.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={classes.input}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
          />
          <textarea
            placeholder="Enter your feedback"
            value={feedbackMessage}
            onChange={(e) => setFeedbackMessage(e.target.value)}
            required
            className={classes.textarea}
          />
          <button type="submit" className={classes.submitBtn}>
            Submit Feedback
          </button>
          {feedbackError && <p className={classes.error}>{feedbackError}</p>}
        </form>
      )}
      <h2 className={classes.title}>Contact Form</h2>
      {contactSubmitted ? (
        <p className={classes.success}>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleContactSubmit} className={classes.form}>

          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
          />
          <textarea
            placeholder="Enter your message"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            required
            className={classes.textarea}
          />
          <button type="submit" className={classes.submitBtn}>
            Submit Contact Message
          </button>
          {contactError && <p className={classes.error}>{contactError}</p>}
        </form>
      )}
    </div>
  );
};

export default Feedback;
