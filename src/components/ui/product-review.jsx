import { Button } from "./button"
import Container, { ContainerV2 } from "./container"
import Typography from "./typography"
import { StarFilledIcon } from "@radix-ui/react-icons"

const ProductReview = () => {
  return (
    <Container>
        <ContainerV2>
            <div className="grid border-b place-items-center">
                <Typography like="h5" element="span" className="pb-5 border-b-2 border-primary text-semibold"> Product Reviews</Typography>
            </div>
            <div className="flex flex-col gap-10 p-5 border my-11 ">
                    <Typography like="h5">Customer Reviews</Typography>
                    <div className="flex items-center justify-between ">
                     <span className='flex gap-1'>
                       <StarFilledIcon className="w-[1em] h-[1em] text-xl "/>
                       <StarFilledIcon className="w-[1em] h-[1em] text-xl "/>
                       <StarFilledIcon className="w-[1em] h-[1em] text-xl "/>
                       <StarFilledIcon className="w-[1em] h-[1em] text-xl "/>
                       <StarFilledIcon className="w-[1em] h-[1em] text-xl "/>
                     </span>
                     <span><Button variant='secondary'>Write a Review</Button></span>
                    </div>
                
                <div className="py-6 space-y-6 border-t">
                  <div className="space-y-2">
                      <div className='flex gap-1'>
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                      <Typography like='h5' className="font-bold">William on April 15, 2024 </Typography>
                  </div>
                  <Typography like='h5'className="font-bold"> Cute design </Typography>
                  <Typography variant="muted" like="p">Very good quality shoes, I like them! Will order again soon.</Typography>
                </div>
                
            </div>
        </ContainerV2>
    </Container>
  )
}

export default ProductReview