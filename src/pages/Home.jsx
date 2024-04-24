import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import Arrival from "@/components/sections/arrival";
import Showcase from "@/components/sections/product-showcase";
import Catagories from "@/components/sections/catagories";
import VideoAdvertisement from "@/components/sections/video-advertisement";
import BestSellingProduct from "@/components/sections/best-selling-product";
import Service from "@/components/sections/service";
const Home = () => {
  return (<>
    <Header/>
    <HeroSection/>
    <Arrival/>
    <Showcase/>
    <Catagories/>
    <VideoAdvertisement/>
    <BestSellingProduct/>
    <Service/>
    <Footer/>
  </>
  );
};

export default Home;
