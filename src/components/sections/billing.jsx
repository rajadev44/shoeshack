import { useState } from "react"
import Container , { ContainerV2 } from "../ui/container"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import * as yup from 'yup';
import Typography from "../ui/typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const navigate  = useNavigate();
  const [billingForm, setBillingForm] = useState({
    first : '',
    last : '',
    company : '',
    country: '',
    street: '',
    town: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    order: '',
    payment: ''
  })


  const [errors, setErrors] = useState([]);

  const billingSchema = yup.object().shape({
    first : yup.string().required(),
    last : yup.string().required(),
    company : yup.string().required(),
    country: yup.string().required(),
    street: yup.string().required(),
    town: yup.string().required(),
    state: yup.string().required(),
    postcode: yup.number().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    order: yup.string().required(),
    payment: yup.string().required("please select payment option"),
  })
  
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBillingForm(bill=> ({...bill, [name]: value}))
  }

  const handlePlaceOrder = () => {
    billingSchema.validate(billingForm)
    .then((data)=>{
      console.log(data);
      toast.success('Order Confirmed', {
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
      navigate("/dashboard")
      setErrors([])
    })
    .catch((err)=>{
      setErrors(err.errors)
    })
  }


  return (
    <Container>
        <ContainerV2>
        <div className='my-8 md:my-16'>
            <h2 className='text-2xl font-semibold'>Billing Details</h2>
          
          <div className="flex flex-wrap gap-10">  
              <div className="basis-60 grow">
                <form className="my-6 space-y-4">
                    <div className="flex flex-wrap gap-4">   
                        <Input name='first' value={billingForm.first} onChange={handleChangeInput} className='basis-60 rounded-[5px] grow' type='text' placeholder='First Name'/>
                        <Input name='last' value={billingForm.last} onChange={handleChangeInput} className='basis-60 rounded-[5px] grow' type='text' placeholder='Last Name'></Input>
                    </div>
                    <Input name='company' value={billingForm.company} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='Company Name'></Input>
                    <Input name='country' value={billingForm.country} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='Country'></Input>
                    <Input name='street' value={billingForm.street} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='Street Address'></Input>
                    <Input name='town' value={billingForm.town} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='Town / City'></Input>
                    <Input name='state' value={billingForm.state} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='State / County'></Input>
                    <Input name='postcode' value={billingForm.postcode} onChange={handleChangeInput} className='w-full rounded-[5px]' type='text' placeholder='Postcode / ZIP'></Input>
                    <Input name='phone' value={billingForm.phone} onChange={handleChangeInput} className='w-full rounded-[5px]' type='tel' placeholder='Phone'></Input>
                    <Input name='email' value={billingForm.email} onChange={handleChangeInput} className='w-full rounded-[5px]' type='email' placeholder='Email Address'></Input>
                    <div className="flex items-center gap-4">
                        <input id="create-account" className='rounded-[4px]' type='checkbox'/>
                        <label
                          htmlFor="create-account"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                         Create an account?
                        </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input id="ship-to-different-address" className='rounded-[4px]' type='checkbox'/>
                        <label
                          htmlFor="ship-to-different-address"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                         Ship to a different address?
                        </label>
                    </div>
                    <Textarea name='order' value={billingForm.order} onChange={handleChangeInput} className='w-full rounded-[5px]' placeholder='Order Notes'></Textarea>
                </form>                
               </div>
               {/* Order detail section */}
               <div className="basis-40 grow">
                     <div className="bg-gray-100 p-4 rounded-[5px]">
                          <h3 className='text-lg font-semibold'>Your Order</h3>
                          <div className="flex items-center justify-between mt-4">
                            <p>Product</p>
                            <p>Total</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p>Product 1</p>
                            <p>£100.00</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p>Product 2</p>
                            <p>£100.00</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p>Subtotal</p>
                            <p>£200.00</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p>Shipping</p>
                            <p>£5.00</p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <p>Total</p>
                            <p>£205.00</p>
                          </div>
                          
                          <hr />
                            {/* payment section */}
                          <div>
                            <h3 className='mt-4 text-lg font-semibold'>Payment Method</h3>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                <input value={'bank'} onChange={handleChangeInput} id="payment-method-1" className='rounded-[4px]' name='payment' type='radio'/>
                                <label
                                  htmlFor="payment-method-1"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                 Bank Transfer
                                </label>
                                <Textarea className='w-full rounded-[5px] bg-white' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis quaerat enim'></Textarea>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <input value={'cash'} onChange={handleChangeInput} id="payment-method-2" className='rounded-[4px]' name='payment' type='radio'/>
                                <label
                                  htmlFor="payment-method-2"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                 Cash on Delivery
                                </label>
                            </div>
                            
                          </div>
                        
                          <button onClick={handlePlaceOrder} className='w-full bg-primary text-white rounded-[5px] py-2 my-4'>Place Order</button>
                          {errors && errors.map(err=>(
                            <Typography key={err} className="col-span-4 text-sm text-center md:text-sm" variant="error">{err}</Typography>
                          ))}
                     </div>
               </div>
    
            </div>

        </div>
        </ContainerV2>
    </Container>
  )
}

export default Billing