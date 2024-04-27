import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer";
import ProductDescription from "@/components/ui/product-description";
import ProductReview from "@/components/ui/product-review";
import { HeroSectionV2 } from "@/components/sections/hero-section";
const ProductPages = () => {
  return (
    <>
        <Header/>
        <HeroSectionV2>Individual Product Page</HeroSectionV2>
        <ProductDescription/>
        <ProductReview/>
        <Footer/>
    </>
  )
}

export default ProductPages