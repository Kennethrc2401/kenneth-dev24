import React from 'react';
import WelcomeBanner from './welcome-banner';
import ContactForm from '../ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className="homePageContainer">
      <main>
        <section id="portfolio" className="portfolioSection1">
          <div className="portfolioContainer1">
            <WelcomeBanner />
          </div>
        </section>

        <section id="about" className="homeAboutSection">
          <div className="aboutContainer">
            <h2 className='homeAboutHeading'>About</h2>
            <p className='homeAboutParagraph'>
              I am a web developer and designer with a passion for creating
              beautiful, functional, and accessible websites. I am currently
              based in the United States and I am available for freelance
              work. I am also open to full-time positions.
            </p>
          </div>
        </section>
        <section id="contact" className="contactSection">
          <div className="homeContactContainer">
            <h2 className='homeContactHeading'>Contact</h2>
            <p className='homeContactParagraph'>
              If you would like to get in touch, please fill out the form below and I
              will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default HomePage;
