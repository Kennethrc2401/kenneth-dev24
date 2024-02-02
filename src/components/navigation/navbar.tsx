import React from 'react'

const navbarLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Projects', link: '/projects' },
  { title: 'Contact', link: '/contact' },
]

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between w-full p-8 nav">
      <div className="text-2xl font-bold">Kenneth&apos;s Portfolio</div>
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