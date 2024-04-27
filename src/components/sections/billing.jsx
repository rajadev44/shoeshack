import Container , { ContainerV2 } from "../ui/container"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const Billing = () => {
  return (
    <Container>
        <ContainerV2>
        <div className='my-8 md:my-16'>
            <h2 className='text-2xl font-semibold'>Billing Details</h2>
          
          <div className="flex flex-wrap gap-10">  
              <div className="basis-60 grow">
                <form className="my-6 space-y-4">
                    <div className="flex flex-wrap gap-4">   
                        <Input className='basis-60 rounded-[5px] grow' type='text' placeholder='First Name'/>
                        <Input className='basis-60 rounded-[5px] grow' type='text' placeholder='Last Name'></Input>
                    </div>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='Company Name'></Input>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='Country'></Input>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='Street Address'></Input>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='Town / City'></Input>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='State / County'></Input>
                    <Input className='w-full rounded-[5px]' type='text' placeholder='Postcode / ZIP'></Input>
                    <Input className='w-full rounded-[5px]' type='tel' placeholder='Phone'></Input>
                    <Input className='w-full rounded-[5px]' type='email' placeholder='Email Address'></Input>
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
                    <Textarea className='w-full rounded-[5px]' placeholder='Order Notes'></Textarea>
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
                                <input id="payment-method-1" className='rounded-[4px]' type='radio'/>
                                <label
                                  htmlFor="payment-method-1"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                 Bank Transfer
                                </label>
                                <Textarea className='w-full rounded-[5px] bg-white' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis quaerat enim'></Textarea>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <input id="payment-method-2" className='rounded-[4px]' type='radio'/>
                                <label
                                  htmlFor="payment-method-2"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                 Cash on Delivery
                                </label>
                            </div>
                            
                          </div>
                          
                          <button className='w-full bg-primary text-white rounded-[5px] py-2 mt-4'>Place Order</button>
                     </div>
               </div>
    
            </div>

        </div>
        </ContainerV2>
    </Container>
  )
}

export default Billing