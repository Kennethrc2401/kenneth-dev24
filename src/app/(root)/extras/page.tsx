"use client"
import React from 'react'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="">
      <Navbar />
      <div className="extrasContainer container mx-auto">
        <h1 className="extrasHeading text-3xl font-bold text-center mt-8">Extras</h1>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="extrasCardContainer w-full md:w-1/3 p-4">
            <div className="extrasSubContainer1 bg-white shadow-md rounded p-4">
              {/* Python & Robotics Section*/}
              <h2 className="text-xl font-bold">Python Development</h2>
              <p className="">View my Python Software Development & Robotics Projects. Still under development. Linked to games page for now.</p>
              <div className="flex justify-center items-center mt-4">
                <a href="/gamesHome" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="extrasSubContainer2 bg-white shadow-md rounded p-4">
              {/* Photography Section*/}
              <h2 className="text-xl font-bold">Photography</h2>
              <p className="">On the side, I am a sports photographer.</p>
              <div className="flex justify-center items-center mt-4">
                <a href="http://kenneth-s-photos.weebly.com/" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Photos
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="extrasSubContainer3 bg-white shadow-md rounded p-4">
              {/* Games List Section*/}
              <h2 className="text-xl font-bold">Games</h2>
              <p className="">Play games from my developer collection</p>
              <div className="flex justify-center items-center mt-4">
                <a href="/gamesHome" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Games
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page