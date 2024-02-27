"use client";

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import NavbarV2 from '../navigation/NavbarV2';
import ContactForm from '../ContactForm';
import { Button } from '../ui/button';

type Props = {}

const HomePageVersionTwo = (props: Props) => {
  return (
    <div>
        <div>
            <NavbarV2 />
        </div>
        <div>
            <Carousel orientation="vertical">
            <CarouselContent>
                <CarouselItem>
                    <h1>Welcome to my Portfolio</h1>
                    <h2>
                        Kenneth Ramirez Castro
                    </h2>
                    <p>
                        Web Developer | Designer | Creator
                    </p>
                    <Button
                        variant="default"
                        size="default"
                    >
                        <a href="/projects">
                            View Projects
                        </a>
                    </Button>
                </CarouselItem>
                <CarouselItem>
                    <ContactForm />
                </CarouselItem>
            </CarouselContent>
            </Carousel>

        </div>
              
    </div>
  )
}

export default HomePageVersionTwo