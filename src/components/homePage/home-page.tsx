import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="homePageContainer">
        <header className="hpHeader">
            <h1>Kenneth Ramirez Castro</h1>
            <p>Web Developer | Designer | Creative</p>
        </header>
        <main>
            <section id="portfolio" className="portfolioSection1">
                <div className="portfolioContainer1">
                    <h2>Portfolio</h2>
                    <div className="portfolioItems">
                        <div className="portfolioItem">
                            <h3>Project 1</h3>
                            <p>Project description</p>
                        </div>
                        <div className="portfolioItem">
                            <h3>Project 2</h3>
                            <p>Project description</p>
                        </div>
                        <div className="portfolioItem">
                            <h3>Project 3</h3>
                            <p>Project description</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolioSection2">
                <div className="portfolioContainer2">
                    <h2>Portfolio</h2>
                    {/* Add your project thumbnails or descriptions here */}
                </div>
            </section>
            <section id="contact" className="portfolioSection3">
                <div className="portfolioContainer3">
                    <h2>Contact Me</h2>
                    <p>Have a project in mind or just want to say hello? Feel free to reach out!</p>
                    <a href="#contact" className="btn">Get in Touch</a>
                </div>
            </section>
        </main>
    </div>
  )
}

export default HomePage