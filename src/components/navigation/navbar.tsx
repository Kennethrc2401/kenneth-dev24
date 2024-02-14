import React from 'react'
import Logo from "@/assets/Logo.png"
import Image from "next/image"
const navbarLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Resume', link: '/resume' },
  { title: 'Projects', link: '/projects' },
  { title: 'Contact', link: '/contact' },
  { title: 'Extras', link: '/extras'}
  // { title: 'Games', link: '/gamesHome' },
]

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between w-full p-8 nav">
      {/* <div className="text-2xl font-bold">Kenneth&apos;s Portfolio</div> */}
      <Image className="navLogo" src={Logo} alt="Logo" width={50} height={50} />
      <div className="flex space-x-8">
        {navbarLinks.map((link) => (
          <a key={link.title} href={link.link} className="text-xl linkName">
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar