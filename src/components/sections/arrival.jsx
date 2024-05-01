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
  CarouselNext,
  CarouselPrevious
  
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Arrival = () => {
   const arrivalProductData = [    {
    "id": "120",
    "title": "Lora Dora Womens Hessian Wedge Sandals",
    "description": "Our wedge sandals are produced to the highest standard using tried and tested quality fabrics and materials to ensure we bring you a long lasting product. Our UK design team factor in the latest fashion trends whilst ensuring the shoes are comfortable and practical, whatever the occasion.",
    "price": "20",
    "image1": "https://m.media-amazon.com/images/I/71AMxGZKjUL._AC_SX625_.jpg",
    "image2": "https://m.media-amazon.com/images/I/71AMxGZKjUL._AC_SX625_.jpg",
    "image3": "https://m.media-amazon.com/images/I/71iBodxkDVL._AC_SY695_.jpg",
    "image4": "https://m.media-amazon.com/images/I/61mkw1gUpsL._AC_SX625_.jpg",
    "category": "Women Fashion Sandals"
},
{
    "id": "121",
    "title": "AJVANI Womens ladies mid low block heel t-bar brogue comfort rubber sole court shoes",
    "description": "We are devoted to perfecting our quality and designs, providing style and comfort for all the family - men, women, and children.",
    "price": "31",
    "image1": "https://m.media-amazon.com/images/I/61MRkDgTWFL._AC_SY625_.jpg",
    "image2": "https://m.media-amazon.com/images/I/51P49QqU8+L._AC_SY625_.jpg",
    "image3": "https://m.media-amazon.com/images/I/71ApPMJK5AL._AC_SY625_.jpg",
    "image4": "https://m.media-amazon.com/images/I/61PwdGGGHBL._AC_SY625_.jpg",
    "category": "Women Fashion Sandals"
},
{
    "id": "122",
    "title": "DREAM PAIRS Elastic Strappy Flats Sandals",
    "description": "Featuring elastic crisscross straps, these cute gladiator sandals are sure to compliment every modern woman's wardrobe.",
    "price": "23",
    "image1": "https://m.media-amazon.com/images/I/71wBQsmhBNL._AC_SY625_.jpg",
    "image2": "https://m.media-amazon.com/images/I/81PY++wAQbL._AC_SY625_.jpg",
    "image3": "https://m.media-amazon.com/images/I/81PY++wAQbL._AC_SY625_.jpg",
    "image4": "https://m.media-amazon.com/images/I/51zn8mz+XnL._AC_SY625_.jpg",
    "category": "Women Fashion Sandals"
}]
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
 

  return (
    <Container>
      
    <ContainerV2 className="pt-8 md:pt-14">
      <div className='grid my-5 place-items-center'>
        <h2 className='text-4xl font-medium '>New Arrivals</h2>
      </div>

        <Carousel 
            plugins={[plugin.current]}
            className='w-full mx-auto '
            options={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='' >
            {arrivalProductData.map((product, index) => (
                
              <CarouselItem className="h-full basis-full md:basis-1/2 lg:basis-1/3 group hover:cursor-pointer" key={index}>
                <Link to={'/individual-product-page?id='+product.id}>
                <div className='p-1'>
                  <Card className='space-y-4 rounded-md group-hover:bg-primary'>
                    <CardContent className='flex items-center justify-center p-6 overflow-hidden rounded-md aspect-square'>
                      <img alt='product' src={product.image1} className='transition duration-1000 rounded-md group-hover:scale-95' />
                    </CardContent>
                    <CardTitle className='w-11/12 m-auto'>
                      <h3 className="text-2xl text-center group-hover:text-primary-foreground group-hover:underline group-hover:underline-offset-8 line-clamp-1 ">{product.title}</h3>
                    </CardTitle>
                    <CardDescription>
                        <p className="px-8 text-sm text-center group-hover:text-muted text-balance line-clamp-3">{product.description}</p>
                    </CardDescription>
                    <CardFooter className="justify-center text-sm group-hover:text-primary-foreground">
                      <p >£{product.price}</p>
                    </CardFooter>
                  </Card>
                </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='shadow-sm show lg:hidden left-3 bg-primary text-primary-foreground'/>
          <CarouselNext className='shadow-sm show lg:hidden right-3 bg-primary text-primary-foreground'/>
        </Carousel>

    </ContainerV2>
    </Container>

  );
};

export default Arrival;
