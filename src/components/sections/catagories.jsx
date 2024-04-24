import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Container from "../ui/container";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";

const Catagories = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const categories = [
    {
      id: 1,
      name: "Nike Air Max",
      description:
        "The Nike Air Max is a classic shoe that offers comfort and style. It features a cushioned sole and a sleek design.",
      img: "/products/product-1.png",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      description:
        "The Adidas Ultraboost is a popular running shoe known for its responsive cushioning and lightweight construction.",
      img: "/products/product-2.png",
    },
    {
      id: 3,
      name: "Puma RS-X",
      description:
        "The Puma RS-X is a retro-inspired sneaker with a chunky silhouette and vibrant colorways.",
      img: "/products/product-3.png",
    },
  ];
  return (
    <Container>
      <div className='pt-8 md:pt-14'>
        <div className='grid mt-5 mb-16 space-y-5 place-items-center'>
            <h2 className='text-4xl font-medium '>Categories</h2>
            <p className="text-xl font-normal capitalize md:text-3xl text-muted-foreground">Explore our wide range of shoe categories</p>
        </div>


        <Carousel
          className='w-full mx-auto'
          plugins={[plugin.current]}
          options={{ loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='justify-center'>
            {categories.map((category, index) => (
              <CarouselItem
                className='h-full md:basis-1/2 lg:basis-1/4 group hover:cursor-pointer'
                key={index}
              >
                <Link to='/'>
                  <div className='p-1'>
                    <Card className='space-y-4 rounded-md group-hover:bg-primary'>
                      <CardContent className='flex items-center justify-center p-6 overflow-hidden rounded-md aspect-square'>
                        <img
                          alt='product category'
                          src={category.img}
                          className='transition duration-1000 rounded-md group-hover:scale-95'
                        />
                      </CardContent>
                      <CardTitle className=''>
                        <h3 className='text-3xl text-center group-hover:text-primary-foreground group-hover:underline group-hover:underline-offset-8 '>
                          {category.name}
                        </h3>
                      </CardTitle>
                      <CardDescription>
                        <p className='px-8 text-center md:text-lg group-hover:text-muted text-balance'>
                          {category.description}
                        </p>
                      </CardDescription>
                      <CardFooter className='justify-center text-3xl group-hover:text-primary-foreground'>
                        <p>{category.price}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default Catagories;
