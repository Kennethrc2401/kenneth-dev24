import React from 'react'

type Props = {}

const HomePageVersionTwo = (props: Props) => {
  return (
    <div>
        {/* Advanced Version of Home Page -- More Beautiful and Lots of Functionality */}
        <h1>Home Page Version 2</h1>

        {/* 1. Header */}
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
            
            {/* 2. Banner */}
            <section>
                <h2>Welcome to Our Website</h2>
                <p>Here you can find all the information you need about our company</p>
                <button>Learn More</button>
            </section>
                
                {/* 3. Services */}
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </section>
                    
                    {/* 4. About Us */}
                    <section>
                        <h2>About Us</h2>
                        <p>We are a company that provides the best services in the world</p>
                    </section>
                        
                        {/* 5. Contact */}
                        <section>
                            <h2>Contact Us</h2>
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>
                                <button>Send</button>
                            </form>
                        </section>

                        {/* 6. Footer */}
                        <footer>
                            <p>© 2021 Our Company</p>
                        </footer>        
    </div>
  )
}

export default HomePageVersionTwo