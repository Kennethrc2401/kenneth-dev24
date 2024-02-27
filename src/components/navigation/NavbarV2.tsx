"use client"

import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Separator } from '../ui/separator'
const styles = require('./NavbarV2Styles.css')
import Logo from "@/assets/Logo.png"
import Image from "next/image"
import SocialIconsComponent from '../socialIcons/SocialIcons'

type Props = {}

const NavbarV2 = (props: Props) => {

    // Styles for large screen size
    const largeScreenStyles = {
        container: 'navLargeContainer container lg:hidden',
        menu: 'hidden md:block flex justify-end items-center',
        link: 'mr-4 text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-200 transition duration-300 ease-in-out',
        navLogo: 'rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:rotate-180 transform origin-center cursor-pointer',
        bottomDivider: 'border-b-2 border-gray-200 dark:border-gray-800 w-full mt-4 mb-4'
    }

    // Styles for small screen size
    const smallScreenStyles = {
        container: 'navSmallContainer container md:hidden flex justify-end items-center',
        dropdown: 'md:hidden show flex flex-col items-center justify-center w-full h-full text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-200 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg',
        link: 'mb-4 hover:text-red-500 dark:hover:text-red-500 transition duration-300 ease-in-out text-center w-full text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-200 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer',
        navLogo: 'rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:rotate-180 transform origin-center cursor-pointer',
        navSocials: 'flex justify-center items-center w-full mt-4 mb-4'
    }

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
                <div
                    className={`${largeScreenStyles.container}`}
                >
                    {/* Logo */}
                        <div className={styles.logoContainer}>
                            <Image
                                className={largeScreenStyles.navLogo}
                                src={Logo}
                                alt="Logo"
                                width={50}
                                height={50}
                            />
                        </div>
                        
                        {/* Navbar Menu */}
                        <div
                            className={largeScreenStyles.menu}
                        >
                            <a 
                            className={largeScreenStyles.link}
                            href="/">
                                Home
                            </a>
                            <a 
                            className={largeScreenStyles.link}
                            href="/about">
                                About
                            </a>
                            <a
                            className={largeScreenStyles.link}
                            href="/resume">
                                Projects
                            </a>
                            <a 
                            className={largeScreenStyles.link}
                            href="/projects">
                                Projects
                            </a>
                            <a 
                            className={largeScreenStyles.link}
                            href="/contact">
                                Contact
                            </a>
                            <a 
                            className={largeScreenStyles.link}
                            href='/extras'>
                                Extras</a>
                        </div>
                </div>
            ) : (
                <div
                className={`${smallScreenStyles.container}`}
                >
                   <Sheet>
                        <SheetTrigger>
                            <Menu 
                                // Need some spacing above the menu icon
                                className='mt-4'
                                size={24} 
                            />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                {/* Logo */}
                            <div className={styles.logoContainer}>
                                <Image
                                    className={smallScreenStyles.navLogo}
                                    src={Logo}
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </div>
                                <SheetTitle>
                                    Welcome to my portfolio!
                                </SheetTitle>
                            </SheetHeader>
                            <Separator />
                            <div 
                                id="dropdown" 
                                className={smallScreenStyles.dropdown}
                            >
                                <a 
                                    href="/"
                                    className={smallScreenStyles.link}
                                >
                                    Home
                                </a>
                                <a
                                className={smallScreenStyles.link}
                                href="/about"
                                >
                                    About
                                </a>
                                <a
                                className={smallScreenStyles.link}
                                href="/resume"
                                >
                                    Resume
                                </a>
                                <a 
                                className={smallScreenStyles.link}
                                href="/projects"
                                >
                                    Projects
                                </a>
                                <a 
                                className={smallScreenStyles.link}
                                href="/contact"
                                >
                                    Contact
                                </a>
                                <a 
                                className={smallScreenStyles.link}
                                href='/extras'
                                >
                                    Extras
                                </a>
                                <Separator />
                                <div className={`${smallScreenStyles.navSocials}`}>
                                    <SocialIconsComponent />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet> 
                </div>
            )}
            <div className={largeScreen ? largeScreenStyles.bottomDivider : ''}></div>
        </div>
    )
}

export default NavbarV2