"use client";
// import { useForm } from "react-hook-form"
// import { motion } from "framer-motion"

import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/ContactForm"
type Props = {}

const Contact = (props: Props) => {
  const inputStypes = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div 
        className="contactContainer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans flex flex-col items-center space-y-8"
      >
        <div className="contactForm">
          <h1 className="text-4xl font-bold contactFormHeading">Contact</h1>
          
          <ContactForm />
        </div>
              
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact