import Container, { ContainerV2 } from "@/components/ui/container";
import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Arrival = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
      
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        description: "The Nike Air Max is a classic shoe that offers comfort and style. It features a cushioned sole and a sleek design.",
        price: "£99.99",
        img: "/products/product-1.png",
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        description: "The Adidas Ultraboost is a popular running shoe known for its responsive cushioning.",
        price: "£129.99",
        img: "/products/product-2.png",
    },
    {
        id: 3,
        name: "Puma RS-X",
        description: "The Puma RS-X is a retro-inspired sneaker with a chunky silhouette and vibrant colorways cushioning.",
        price: "£89.99",
        img: "/products/product-3.png",
    },
];

  return (
    <Container>
      
    <ContainerV2 className="pt-8 md:pt-14">
      <div className='grid my-5 place-items-center'>
        <h2 className='text-4xl font-medium '>New Arrivals</h2>
      </div>

        <Carousel 
            plugins={[plugin.current]}
            className='w-full mx-auto'
            options={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='' >
            {products.map((product, index) => (
                
              <CarouselItem className="h-full basis-full md:basis-1/2 lg:basis-1/3 group hover:cursor-pointer" key={index}>
                <Link to='/'>
                <div className='p-1'>
                  <Card className='space-y-4 rounded-md group-hover:bg-primary'>
                    <CardContent className='flex items-center justify-center p-6 overflow-hidden rounded-md aspect-square'>
                      <img alt='product' src={product.img} className='transition duration-1000 rounded-md group-hover:scale-95' />
                    </CardContent>
                    <CardTitle className=''>
                      <h3 className="text-2xl text-center group-hover:text-primary-foreground group-hover:underline group-hover:underline-offset-8 ">{product.name}</h3>
                    </CardTitle>
                    <CardDescription>
                        <p className="px-8 text-sm text-center group-hover:text-muted text-balance">{product.description}</p>
                    </CardDescription>
                    <CardFooter className="justify-center text-sm group-hover:text-primary-foreground">
                      <p >{product.price}</p>
                    </CardFooter>
                  </Card>
                </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

    </ContainerV2>
    </Container>

  );
};

export default Arrival;
