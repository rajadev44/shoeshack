import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import { HeroSectionV2 } from "@/components/sections/hero-section"
import Service from "@/components/sections/service"
import Product from "@/components/sections/product-list-and-filter"
const Shop = () => {
  return (<>
  <Header/>
  <HeroSectionV2>Shop</HeroSectionV2>
  <Product/>
  <Service/>
  <Footer/>
  </>)
}

export default Shop