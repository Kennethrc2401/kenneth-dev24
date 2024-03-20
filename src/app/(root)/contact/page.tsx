"use client";
// import { useForm } from "react-hook-form"
// import { motion } from "framer-motion"

// import Navbar from "@/components/navigation/navbar"
import NavbarV2 from "@/components/navigation/NavbarV2";
import Footer from "@/components/footer"
import ContactForm from "@/components/ContactForm"
import styles from '@/utils/stylesheets/contactFormStyles.module.css'
import SocialIconsComponent from "@/components/socialIcons/SocialIcons";

type Props = {}

const Contact = (props: Props) => {  

  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <NavbarV2 />
      </div>
      <div 
        className="contactContainer dark:bg-gray-800 dark:text-gray-100 font-sans flex flex-col items-center space-y-10 sm:space-y-20 px-4 sm:px-0 py-10 sm:py-20 w-full h-full overflow-x-hidden overflow-y-auto"
      >
        <div className="contactForm">
          <h1 className="text-4xl font-bold contactFormHeading">Contact</h1>
          
          <ContactForm />
          <div className="socialIcons">
            <SocialIconsComponent />
          </div>
        </div>
        
              
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact