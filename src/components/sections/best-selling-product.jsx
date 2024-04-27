import { Button } from "../ui/button";
import Container, { ContainerV2 } from "../ui/container";

const bestSellingProduct = () => {
  return (
    <Container>
      <ContainerV2 className="mb-20 md:mb-0">
        
      <div className="grid items-center gap-5 mt-8 md:gap-0 cols-1 md:grid-cols-2 md:mt-14 ">
        <div className="grid order-2 gap-4 md:order-1 md:w-11/12 lg:w-4/5 place-items-center md:place-items-start">
          <h3 className="text-2xl font-bold text-center md:text-4xl md:text-left">Best Selling Product</h3>
          <p className="font-normal text-center md:text-justify text-md md:text-balance text-muted-foreground">
            The <strong>Nike Air Max</strong> stands out as a perennial favorite in the footwear industry, renowned for its iconic style and exceptional comfort. This shoe incorporates advanced cushioning technology with its signature Air Max bubble embedded in the heel, providing superior impact protection and support. The sleek, streamlined design enhances its aesthetic appeal, making it a versatile choice for both athletic and casual attire.
          </p>
          <Button className=''>  Shop Now </Button>
        </div>
        <img src="/banner-3.webp" alt='best selling product' className="w-full aspect-square md:order-2"/>
      </div>
      
      </ContainerV2>
    </Container>
  )
}

export default bestSellingProduct