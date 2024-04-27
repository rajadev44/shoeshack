import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import LoginSection from "@/components/sections/login-section";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import Billing from "@/components/sections/billing";
const checkout = () => {
  return (<>
    <Header/>
    <HeroSectionV2>Checkout</HeroSectionV2>
    <LoginSection/>
    <Billing/>
    <Footer/>
  </>
  );
};

export default checkout;
