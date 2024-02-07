"use client";

import React from 'react'
import Navbar from '@/components/navigation/navbar'
import ResumeComponent from '@/components/resume/Resume'
import Footer from '@/components/footer'

type Props = {}

const Resume = (props: Props) => {
  return (
    <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <ResumeComponent />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default Resume