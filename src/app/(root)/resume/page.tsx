"use client";

import NavbarV2 from '@/components/navigation/NavbarV2';
import ResumeComponent from '@/components/resume/Resume'
import Footer from '@/components/footer'

type Props = {}

const Resume = (props: Props) => {
  return (
    <div>
        <NavbarV2 />
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