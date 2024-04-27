import { Link } from "react-router-dom";
import { Button } from "./button";
import Container, { ContainerV2 } from "./container";
import Typography from "./typography";

const CartTable = () => {
  return (
    <Container>
      <ContainerV2 className="my-20">

        <div className="flex flex-col">

          <div className="grid grid-cols-12 p-5 border-b rounded-t-lg bg-secondary text-secondary-foreground">
            <Typography className="col-span-7 "  variant="muted">  Product   </Typography>
            <Typography className="col-span-2 "  variant="muted">  Price   </Typography>
            <Typography className="col-span-1 "  variant="muted">  Quantity    </Typography>
            <Typography className="col-span-2 text-right"  variant="muted">  Total   </Typography>
          </div>
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
        
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>

          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
          
          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>
          
          
          <div className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
            <div className="flex col-span-7 gap-4 md:col-span-7">
              <img src="/banner-1.jpg" alt='banner' className="w-20 rounded-sm"/>
              <span className="w-4/6 overflow-hidden">
                <Typography element="p" className="text-sm text-left md:text-lg" >Product Name</Typography>
                <Typography element="p" className='text-sm truncate left font- md:text-sm' variant="muted">The Nike Air Max stands out as a perennial favorite in the footwear industry, ...</Typography>
              </span>
            </div>
            <Typography className="col-span-2 text-sm text-left md:text-lg"  > £19.99</Typography>
            <Typography className="col-span-1 text-sm text-center md:text-lg"> 1 </Typography>
            <Typography className="col-span-2 text-sm text-right md:text-lg" > £24.99</Typography>  
          </div>

          <div className="grid grid-cols-12 p-5 border-b rounded-b-lg bg-secondary text-secondary-foreground">
            <Typography className="col-span-10 font-semibold text-right text-secondary-foreground" >  Total   </Typography>
            <Typography className="col-span-2 text-right" >  £24.99   </Typography>
          </div>

          <div className="flex justify-center gap-4 mt-16 md:mt-20">
            <Button asChild><Link to='/'> Continue Shopping</Link></Button>
            <Button asChild><Link to='/checkout'> Proceed to Checkout</Link></Button>
          </div>
        </div>


      </ContainerV2>
    </Container>
  );
};

export default CartTable;
