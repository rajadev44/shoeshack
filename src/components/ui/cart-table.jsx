import { Link } from "react-router-dom";
import { Button } from "./button";
import Container, { ContainerV2 } from "./container";
import Typography from "./typography";
import { useSelector } from "react-redux";

const CartTable = () => {
  const products = useSelector(state => state.product.cart);
  
  return (
    <Container>
      <ContainerV2 className="my-20">
        <div className="flex flex-col">
          <div className="grid grid-cols-12 p-5 border-b rounded-t-lg bg-secondary text-secondary-foreground">
            <Typography className="col-span-6 "  variant="muted">  Product   </Typography>
            <Typography className="col-span-2 text-center"  variant="muted">  Price   </Typography>
            <Typography className="col-span-2 text-center"  variant="muted">  Quantity    </Typography>
            <Typography className="col-span-2 text-right text"  variant="muted">  Total   </Typography>
          </div>
          {products=== undefined || products.length === 0 && <Typography className="my-10 text-center" variant="muted"> Your cart is empty</Typography>}
          {products && products.map((productData,index)=>(
            <div key={index} className="grid grid-cols-12 p-5 hover:bg-secondary hover:border text-secondary-foreground hover:border-white">
              <div className="flex col-span-6 gap-4 md:col-span-6">
                <img src={productData.image1} alt='banner' className="object-contain w-20 h-10 rounded-sm"/>
                <span className="w-4/6 overflow-hidden">
                  <Typography element="p" className="text-xs text-left md:text-lg" >{productData.title}</Typography>
                  {/* <Typography element="p" className='text-xs truncate left font- md:text-sm' variant="muted">{productData.description} </Typography> */}
                </span>
              </div>
              
              <Typography className="col-span-2 text-sm text-center md:text-lg"  > £{productData.price}</Typography>
              <Typography className="col-span-2 text-sm text-center md:text-lg"> {productData.quantity} </Typography>
              <Typography className="col-span-2 text-sm text-right md:text-lg" > £{productData.price*productData.quantity}</Typography>  
            </div>
          ))}
          <div className="flex justify-center gap-4 mt-16 md:mt-20">
            <Button asChild><Link to='/shop'> Continue Shopping</Link></Button>
            <Button asChild><Link to='/checkout'> Proceed to Checkout</Link></Button>
          </div>
        </div>
      </ContainerV2>
    </Container>
  );
};

export default CartTable;


