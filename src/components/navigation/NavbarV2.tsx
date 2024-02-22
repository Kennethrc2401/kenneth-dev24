import React, { useEffect, useState } from 'react'

type Props = {}

const NavbarV2 = (props: Props) => {

    // Variable for large screen size
    const [largeScreen, setLargeScreen] = useState(false)

    // Function to check screen size
    const checkScreenSize = () => {
        setLargeScreen(window.innerWidth > 768)
    }

    // UseEffect to check screen size
    useEffect(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Hide dropdown menu when screen size is large
    useEffect(() => {
        if (largeScreen) {
            document.getElementById('dropdown')?.classList.remove('show')
        }
    }, [largeScreen])

    // Conditional rendering based on screen size
    return (
        <div>
            {largeScreen ? (
                <div>
                    <h1>Large Screen</h1>
                        
                        {/* Navbar Menu */}
                        <div>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                </div>
            ) : (
                <div>
                    <h1>Small Screen</h1>

                    {/* Hamburger Icon Dropdown Menu */}
                    <div>
                        <button
                            onClick={() => {
                                const dropdown = document.getElementById('dropdown')
                                if (dropdown) {
                                    dropdown.classList.toggle('show')
                                }
                            }}
                        >
                            Menu
                        </button>
                        <div>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavbarV2