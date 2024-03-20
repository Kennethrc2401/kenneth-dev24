"use client";

import Footer from "@/components/footer";
import HomePage from "@/components/homePage/home-page";
import "./globals.css";
import "@/components/homePage/HomePageStyles.css";
import "@/utils/stylesheets/ProjectsStyles.css";
import "@/utils/stylesheets/AboutStyles.css";
import "@/utils/stylesheets/contactFormStyles.module.css"
import "@/components/navigation/NavigationStyles.css";
import NavbarV2 from "@/components/navigation/NavbarV2";


// import HomePageVersionTwo from "@/components/homePage/home-page-v2";

type Props = {};

export default function Page(props: Props) {
  return (
    <main 
      // className="flex min-h-screen flex-col items-center justify-betweenn bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans"
    >
      <NavbarV2 />
      {/* <br /> */}
      <HomePage />
      {/* <HomePageVersionTwo /> */}
      <Footer />
      
    </main>
  );
}
