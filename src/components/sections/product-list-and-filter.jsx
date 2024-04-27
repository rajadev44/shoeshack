
import Container ,{ ContainerV2 } from "@/components/ui/container"
import Typography from "../ui/typography"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Link } from "react-router-dom"

const Product = () => {
    const productsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
        <ContainerV2 className="mt-6 md:mt-8">
            <div className="flex flex-col flex-wrap gap-5 md:flex-row ">
                <div className="mx-4 space-y-6 basis-56 grow md:grow-0">
                    <Typography like="h5">Filter By Category</Typography>
                    <div>
                        <Button variant='ghost' className='flex justify-between w-full p-0 px-1 font-normal rounded-sm group'><Typography  variant="muted">Category 1</Typography > <Typography   variant="muted">5</Typography></Button>
                        <Button variant='ghost' className='flex justify-between w-full p-0 px-1 font-normal rounded-sm group'><Typography  variant="muted">Category 2</Typography > <Typography   variant="muted">6</Typography></Button>
                        <Button variant='ghost' className='flex justify-between w-full p-0 px-1 font-normal rounded-sm group'><Typography  variant="muted">Category 3</Typography > <Typography   variant="muted">3</Typography></Button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Typography like="h5">Filter By Price</Typography>
                        <div className="flex gap-2">
                            <Input type='number' placeholder='min'/>
                            <Input type='number' placeholder='max'/>
                        </div>
                        <Button className='' variant='secondary'> Apply </Button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-1 gap-y-5 basis-96 grow">
                    {productsData.map((product, index) => 
                    (<Link  key={index} className="group basis-80 grow md:grow-0 group-hover:bg-secondary" to='/individual-product-page'><div className="p-4 space-y-2 rounded-sm basis-60 grow md:grow-0 group-hover:bg-secondary">
                        <img src="/banner-1.jpg" className="border-b border-primary"/>
                        <Typography className='text-center group-hover:underline group-hover:underline-offset-4' like='h5'>Product Name</Typography>
                        <Typography className="text-sm text-center md:text-sm" variant='muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quod.</Typography>
                        <Typography className='pt-5 text-center group-hover:underline group-hover:underline-offset-4' like='h6' > £24.66</Typography>
                    </div></Link>
                    ))}
                </div>
            </div>
        </ContainerV2>
    </Container>
  )
}

export default Product