"use client";

import React, { useState } from 'react';
import "@/utils/stylesheets/contactFormStyles.module.css"
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
// import AlertMessage from './alertMessage/AlertMessage';
// import Message from './Message/Message';


const ContactForm = () => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;
    const errors = { ...formErrors };

    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    } else {
      errors.name = '';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else {
      errors.email = '';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
      isValid = false;
    } else {
      errors.message = '';
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    // Submit the form data
    try {
      const response = await fetch('https://formsubmit.co/c948f81e53d83333e25ac956a8ebb348', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        
        // Show the success message
        // alert('Email sent successfully!');

        // Close the Alert Dialog
        const dialog = document.querySelector('dialog');
        if (dialog) {
          dialog.close();
          dialog.remove();
        }

        // Clear the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        // Clear the form errors
        setFormErrors({
          name: '',
          email: '',
          message: '',
        });

        // Reset Page
        setTimeout(() => {
          window.location.reload();
        }, response.status === 200 ? 3000 : 0);

      } else {
        console.error('Failed to send email');
        // Handle failure (e.g., show an error message)
        alert('Failed to send email');

      }
    } catch (error) {
      console.error('Error:', error);
      // Handle failure (e.g., show an error message)
      alert('Failed to send email');
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div>
        {/* HEADER */}
        <motion.div>
          <p className="my-5">
            Welcome to the Contact section of my portfolio. Your interest and feedback are greatly appreciated. Whether you have questions about my work, opportunities for collaboration, or just want to say hello, I&apos;m here to listen. Feel free to drop me a message using the form below. I&apos;ll get back to you as soon as possible. Thank you for taking the time to connect with me. I look forward to hearing from you!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div>
            <form onSubmit={handleSubmit} target="_blank" action="https://formsubmit.co/c948f81e53d83333e25ac956a8ebb348" method="POST">
              <input
                className={inputStyles + ' mb-5 text-white'}
                type="text"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="mt-1 text-primary-500">{formErrors.name}</p>}

              <input
                className={inputStyles + ' mb-5 text-white'}
                type="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="mt-1 text-primary-500">{formErrors.email}</p>}

              <input
                className={inputStyles + ' mb-5 text-white'}
                type="tel"
                placeholder="PHONE"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                className={inputStyles + ' mb-5 text-white'}
                placeholder="MESSAGE"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && <p className="mt-1 text-primary-500">{formErrors.message}</p>}

              {/* <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              >
                SUBMIT
              </button> */}
              <AlertDialog>
                <AlertDialogTrigger
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  SUBMIT
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>Submit Form</AlertDialogHeader>
                  <AlertDialogDescription>
                    Are you sure you want to submit the form?
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      type='submit'
                      onClick={handleSubmit as any}
                    >
                      SUBMIT
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
