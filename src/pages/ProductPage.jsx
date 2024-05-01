import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer";
import ProductDescription from "@/components/ui/product-description";
import ProductReview from "@/components/ui/product-review";
import { HeroSectionV2 } from "@/components/sections/hero-section";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const ProductPages = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('id') || 111;
  const productList = useSelector(state => state.product.data);
  const [productData, setProduct] = useState(productList.find(item => item.id === productId));
  useEffect(()=>{
    if(!productData){
      fetch(`https://sheetdb.io/api/v1/h67fu771alwa2/search?id=${productId}`)//filter by price through 'min' and 'max' endpoint
      .then(res=> res.json())
      .then(data => {setProduct(data[0]);})
    }
  },[])


  return (
    <>
        <Header/>
        <HeroSectionV2>{productData?.category || ""}</HeroSectionV2>
        <ProductDescription productId={productId}/>
        <ProductReview/>
        <Footer/>
    </>
  )
}

export default ProductPages