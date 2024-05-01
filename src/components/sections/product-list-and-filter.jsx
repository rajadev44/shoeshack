
import Container ,{ ContainerV2 } from "@/components/ui/container"
import Typography from "../ui/typography"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { addProducts, filter } from "@/features/products"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {
    const products = useSelector(state => state.product.data);
    const catagories = useSelector(state => state.product.category);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch("https://sheetdb.io/api/v1/h67fu771alwa2")//fetching data from the endpoint
        .then(res=> res.json())
        .then(data => dispatch(addProducts(data)) )
    }, [])

    const handleFiltrationByCategory = (id) => {
        let query =''
        if(id>1){
           query = "?sheet=category"+(id-1)
        }
        console.log(query)
        fetch("https://sheetdb.io/api/v1/h67fu771alwa2"+query)//filter by category through 'id' endpoint
        .then(res=> res.json())
        .then(data => data && dispatch(filter(data)) )
    }

    const [form, setForm ] = useState({min: '', max: ''})
    const handleFiltrationByPrice = () =>{
        const min = form.min === '' ? "*" : form.min;
        const max = form.max === '' ? "*" : form.max;
        let query = '';
        if(min !== '*' && max === '*') 
            query = `https://sheetdb.io/api/v1/h67fu771alwa2/search?price[]=%3E${min}`;
        else
            query = `https://sheetdb.io/api/v1/h67fu771alwa2/search?price[]=%3E${min}&price[]=%3C${max}`;
        
        fetch(query)//filter by price through 'min' and 'max' endpoint
        .then(res=> res.json())
        .then(data => data && dispatch(filter(data)) )
    }
    


    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }
    

    
    
  return (
    <Container>
        <ContainerV2 className="mt-6 md:mt-8">
            <div className="flex flex-col flex-wrap gap-5 md:flex-row ">
                <div className="mx-4 space-y-6 basis-56 grow md:grow-0">
                    <Typography like="h5">Filter By Category</Typography>
                    <div>
                        {
                            catagories && catagories.map((category, index) =>
                            <Button onClick={()=>{handleFiltrationByCategory(index+1)}} key={index} variant='ghost' className='flex items-center justify-between w-full p-0 px-1 font-normal rounded-sm group'><Typography  variant="muted" className="text-sm md:text-sm text-muted-foreground">{category.name} </Typography > <Typography   variant="muted">{category.quantity}</Typography></Button>
                            )
                        }
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Typography like="h5">Filter By Price</Typography>
                        <div className="flex gap-2">
                            <Input value={form.min} name='min' onChange={handleChange}  type='number' placeholder='min'/>
                            <Input value={form.max} name='max' onChange={handleChange}  type='number' placeholder='max'/>
                        </div>
                        <Button onClick={handleFiltrationByPrice} className='' variant='secondary'> Apply </Button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-1 gap-y-5 basis-96 grow">
                    {products && products.map((product, index) => 
                    (<Link  key={index} className="group basis-80 grow md:grow-0 group-hover:bg-secondary" to={'/individual-product-page?id='+(index+111)}>
                    <div className="p-4 space-y-2 rounded-sm basis-60 grow md:grow-0 group-hover:bg-secondary">
                        <img src={product.image1} alt="catalog-product" className="object-contain w-full h-40 p-5 border-b-2 "/>
                        <Typography className='text-center capitalize group-hover:underline group-hover:underline-offset-4 line-clamp-1' like='h6'>{product.title}</Typography>
                        <Typography className="m-auto text-sm text-center line-clamp-3 md:text-sm " variant='muted'>{product.description}</Typography>
                        <Typography className='pt-5 text-center group-hover:underline group-hover:underline-offset-4' like='h6' > £{product.price}</Typography>
                    </div></Link>
                    ))}
                    {products===undefined || products.length === 0 && <Typography className='h-20 m-auto text-center' variant="muted" like='h6'>No Products Found</Typography>}
                </div>
            </div>
        </ContainerV2>
    </Container>
  )
}

export default Product