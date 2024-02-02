import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
      className="flex flex-col items-center space-y-4"
      style={{ padding: "1rem 0" }}
    >
      <p>Copyright &copy; Kenneth Ramirez 2024</p>
    </footer>
  )
}

export default Footer