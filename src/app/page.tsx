import Image from "next/image";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import HomePage from "@/components/homePage/home-page";

export default function Home() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-betweenn bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans"
    >
      <Navbar />
      <br />
      <HomePage />
      <Footer />
      
    </main>
  );
}
