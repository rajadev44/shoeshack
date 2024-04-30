import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import UserDashboardSection from "@/components/sections/user-dashboard-section";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const user = useSelector(state => state.auth);
  console.log(user)

  return (
    <>
    <Header/>
    <HeroSectionV2 > {user.username}&apos;s Account</HeroSectionV2>
    <UserDashboardSection/>
    <Footer/>
    </>
  )
}

export default UserDashboard