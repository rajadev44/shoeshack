import { useCallback, useEffect, useState } from "react"
import { Button } from "./button"
import Container, { ContainerV2 } from "./container"
import Quantity from "./quantity-input"
import Typography from "./typography"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/features/products"
import { toast } from "react-toastify"


// eslint-disable-next-line react/prop-types
const ProductDescription = ({productId}) => {
  
  const productData = useSelector(state => state.product.data).find(item => item.id === productId);
  const dispatch =useDispatch();
  const [imageSwitch, setImageSwitch] = useState(productData ? productData.image1 :undefined);  
  const [product, setProduct] = useState(productData ? productData :undefined);
  useEffect(()=>{
    if(!productData){
      fetch(`https://sheetdb.io/api/v1/h67fu771alwa2/search?id=${productId}`)//filter by price through 'min' and 'max' endpoint
      .then(res=> res.json())
      .then(data => {setProduct(data[0]); setImageSwitch(data[0].image1); })
    }
  },[])
  const [quantityValue, setQuantityValue] = useState(1);

  const handleQuantityChange = useCallback((value) => {
    setQuantityValue(value);
  }, []);

  const [size, setSize] = useState('09');
  const handleAddToCart = () => { 
    const cartItem = {...product, quantity: quantityValue, size: size};
    dispatch(addToCart(cartItem));
    toast.success('Added To Cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: 'customId',
      progress: undefined,
      theme: "dark",
    });
  }

  const handleSizeChange = (value) => {
    setSize(value);
  }
  
  return (
    <Container>
        <ContainerV2 className="my-20">
          {product &&(
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-6 basis-full md:basis-2/5">
                  <img alt="shoe product showcase" className="object-contain w-full h-64 p-5 rounded-sm shadow-md aspect-square" src={imageSwitch}/>
                  <div className="grid grid-cols-3 gap-2">
                    <Button className=" h-36 hover:cursor-pointer hover:bg-white grow" variant='ghost' onClick={()=>{setImageSwitch(product.image2)}} asChild>
                      <img  alt="shoe product showcase" className="object-contain" src={product.image2}/>
                    </Button>
                    <Button className=" h-36 hover:cursor-pointer hover:bg-white grow" variant='ghost' onClick={()=>{setImageSwitch(product.image3)}}  asChild>
                      <img  alt="shoe product showcase" className="object-contain" src={product.image3}/>
                    </Button>
                    <Button className=" h-36 hover:cursor-pointer hover:bg-white grow" variant='ghost' onClick={()=>{setImageSwitch(product.image4)}}  asChild>
                      <img  alt="shoe product showcase" className="object-contain" src={product.image4}/>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 basis-full md:basis-2/5 grow">
                    <Typography element='p' like="h2" className="text-center md:text-start">{product.title}</Typography>
                      <div className="flex flex-col gap-3 md:pl-3 basis-full md:basis-2/5 grow">
                        <Typography element="p" like="h4" className="font-light text-center md:text-start">£{product.price}</Typography>
                        <Typography className='text-sm text-center md:text-lg md:text-start' variant="muted">{product.description}</Typography>
                          <div className="flex items-center justify-center gap-4 md:justify-start">
                            <Typography className='text-sm font-semibold md:text-lg' > Size: </Typography>
                            <Select value={size} onValueChange={handleSizeChange}>
                              <SelectTrigger className="md:w-[180px] w-24">
                                <SelectValue placeholder="Select Size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="07">07</SelectItem>
                                <SelectItem value="08">08</SelectItem>
                                <SelectItem value="09">09</SelectItem>
                                <SelectItem value="9.5">9.5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="11">11</SelectItem>
                                <SelectItem value="12">12</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                      </div>                    
                      <div className="flex flex-wrap justify-center gap-2 mt-auto md:ml-3 md:justify-start ">
                        <Quantity min={1} value={quantityValue} onChange={handleQuantityChange}/>
                        <Button onClick={handleAddToCart} className='py-5'>ADD TO CART</Button>
                        <div className="flex items-center justify-between basis-full ">
                          <span className="flex gap-2">
                            <Typography element="p" className="text-xs font-semibold md:text-sm"> SKU: </Typography>
                            <Typography element="p" className="text-xs md:text-sm" variant="muted"> WOO-BEANIE-LOGO </Typography>
                          </span>
                          <ul className='flex'>
                           <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaFacebook /></Button></li>
                           <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaInstagram /></Button></li>
                           <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaTiktok /></Button></li>
                         </ul>
                        </div>
                      </div>
                </div>
            </div>
          )}
        </ContainerV2>
    </Container>
  )
}

export default ProductDescription