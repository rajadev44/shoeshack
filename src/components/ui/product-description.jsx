import { useCallback, useState } from "react"
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


const ProductDescription = () => {
  
  const [quantityValue, setQuantityValue] = useState(1);

  const handleQuantityChange = useCallback((value) => {
    setQuantityValue(value);
  }, []);

  return (
    <Container>
        <ContainerV2 className="my-20">
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2 basis-full md:basis-2/5">
                  <img alt="shoe product showcase" src="/banner-1.jpg"/>
                  <div className="flex w-full gap-2 mt-auto">
                    <Button className="w-1/4 h-full rounded-none hover:cursor-pointer grow " variant='ghost' size='icon' asChild>
                      <img  alt="shoe product showcase" src="/banner-1.jpg"/>
                    </Button>
                    <Button className="w-1/4 h-full rounded-none hover:cursor-pointer grow " variant='ghost' size='icon' asChild>
                      <img  alt="shoe product showcase" src="/banner-1.jpg"/>
                    </Button>
                    <Button className="w-1/4 h-full rounded-none hover:cursor-pointer grow " variant='ghost' size='icon' asChild>
                      <img  alt="shoe product showcase" src="/banner-1.jpg"/>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 basis-full md:basis-2/5 grow">
                    <Typography element='p' like="h2">Nike</Typography>
                      <div className="flex flex-col gap-3 md:pl-3 basis-full md:basis-2/5 grow">
                        <Typography element="p" like="h4" className="font-light">£19.99</Typography>
                        <Typography className='text-sm md:text-lg' variant="muted"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </Typography>
                          <div className="flex items-center gap-4">
                            <Typography className='text-sm font-semibold md:text-lg' > Size: </Typography>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="05">05</SelectItem>
                                <SelectItem value="06">06</SelectItem>
                                <SelectItem value="07">07</SelectItem>
                                <SelectItem value="08">08</SelectItem>
                                <SelectItem value="09">09</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="11">11</SelectItem>
                                <SelectItem value="12">12</SelectItem>
                                <SelectItem value="13">13</SelectItem>
                                <SelectItem value="14">14</SelectItem>
                                <SelectItem value="15">15</SelectItem>
                                <SelectItem value="16">16</SelectItem>
                                <SelectItem value="17">17</SelectItem>
                                <SelectItem value="18">18</SelectItem>
                                <SelectItem value="19">19</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                      </div>                    
                      <div className="flex flex-wrap gap-2 mt-auto md:ml-3">
                        <Quantity min={1} value={quantityValue} onChange={handleQuantityChange}/>
                        <Button>ADD TO CART</Button>
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
        </ContainerV2>
    </Container>
  )
}

export default ProductDescription