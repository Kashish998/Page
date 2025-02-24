// components

import CarouselFeatures from "./components/CarouselFeatures";
import Hero from "./components/Hero";
import OnlineCourse from "./components/OnlineCourse";
import OtherCourses from "./components/OtherCourses";
import Pricing from "./components/Pricing";

// import { Navbar, Footer } from "@/app/components";
//import About from "@/app/components/about/about";
//import Contact from "@/app/components/contact/contact";

// import { Hero, Layout, Page, Pricing, OtherCourses, CarouselFeatures } from "@/app/components";

export default function Home() {
  return (
    <>
      <Hero/>
   =
      <OnlineCourse/>     
      { <Pricing/> }
      <OtherCourses/>
      <CarouselFeatures/>
    
    </>
  );
}
