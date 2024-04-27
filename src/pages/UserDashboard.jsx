import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import UserDashboardSection from "@/components/sections/user-dashboard-section";

const UserDashboard = () => {
  return (
    <>
    <Header/>
    <HeroSectionV2>User Account Page</HeroSectionV2>
    <UserDashboardSection/>
    <Footer/>
    </>
  )
}

export default UserDashboard