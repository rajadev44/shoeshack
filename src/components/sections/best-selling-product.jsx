import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Container, { ContainerV2 } from "../ui/container";

const BestSellingProduct = () => {
  const navigate = useNavigate();
  const bestSellingProduct =
  {
    "id": "112",
    "title": "Mountain Warehouse Path Mens Walking Shoes",
    "description": "The Path Waterproof Mens Walking Shoes are a great choice for summer walking. Made with a water resistant upper and sturdy soles with a deep tread for extra grip and stability. Breathable mesh lining helps keep feet fresh and a cushioned footbed offers support and comfort when out hiking or as an everyday walking shoe.",
    "price": "35",
    "image1": "https://m.media-amazon.com/images/I/8109KdcvFHL._AC_SY695_.jpg",
    "image2": "https://m.media-amazon.com/images/I/71g3p0jHFgL._AC_SY695_.jpg",
    "image3": "https://m.media-amazon.com/images/I/81n3k2LkIhL._AC_SY695_.jpg",
    "image4": "https://m.media-amazon.com/images/I/81wrrwVUWlL._AC_SY695_.jpg",
    "category": "Men Sports & Outdoors"
  }
  return (
    <Container>
      <ContainerV2 className="mb-20 md:mb-0">
        
      <div className="grid items-center gap-5 mt-8 md:gap-0 cols-1 md:grid-cols-2 md:mt-14 ">
        <div className="grid order-2 gap-4 md:order-1 md:w-11/12 lg:w-4/5 place-items-center md:place-items-start">
          <h3 className="text-2xl font-bold text-center md:text-4xl md:text-left">Best Men Sports Shoe</h3>
          <p className="font-normal text-center md:text-justify text-md md:text-balance text-muted-foreground">
            {bestSellingProduct.description}
          </p>
          <Button className='' onClick={()=>{navigate('/individual-product-page?id='+bestSellingProduct.id)}}>  Shop Now </Button>
        </div>
        <img src={bestSellingProduct.image1} alt='best selling product' className="object-contain w-full aspect-square md:order-2"/>
      </div>
      
      </ContainerV2>
    </Container>
  )
}

export default BestSellingProduct