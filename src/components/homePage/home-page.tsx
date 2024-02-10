import React from 'react';
import WelcomeBanner from './welcome-banner';
import ContactForm from '../ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className="homePageContainer">
      {/* <header className="hpHeader">
        <h1>Kenneth Ramirez Castro</h1>
        <p>Web Developer | Designer | Creative</p>
      </header> */}
      <main>
        <section id="portfolio" className="portfolioSection1">
          <div className="portfolioContainer1">
            <WelcomeBanner />
          </div>
        </section>
        <section id="contact" className="contactSection">
          <div className="contactContainer">
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
