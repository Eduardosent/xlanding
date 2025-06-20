"use client";// Asegúrate de importar Footer también
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import Sponsors from "@/components/sections/Sponsors";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#830FC1FF]

]">
  <Header/>
   <Hero />
      <AboutUs/>
      <Services/>
      <Sponsors/>
      <Footer />
</div>)
      
    // </div>
  // );
}
