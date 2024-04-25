import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import Map from "@/components/sections/map-location";
import ContactForm from "@/components/sections/contact-form";

const Contact = () => {
  return (
    <>
            <Header/>
            <HeroSectionV2> Contact Us </HeroSectionV2>
            <Map/>
            <ContactForm/>
            <Footer/>
    </>
  )
}

export default Contact