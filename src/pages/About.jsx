import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import AboutUsInformation from "@/components/sections/about-us-information";
import Service from "@/components/sections/service";
import VideoAdvertisement from "@/components/sections/video-advertisement";

const About = () => {
  return (<>
    <Header/>
    <HeroSectionV2 />
    <AboutUsInformation/>
    <VideoAdvertisement/>
    <Service/>
    <Footer/>
  </>
  );
};

export default About;
