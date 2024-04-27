import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import Container, { ContainerV2 } from "../ui/container"
import { Input } from "../ui/input"
import Typography from "../ui/typography"

const LoginSection = () => {
  return (
    <Container>
        <ContainerV2>
        <div className='my-8 md:my-16'>
            <Typography variant='muted' className="text-xs md:text-sm">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer,  proceed to the Shipping & Billing. </Typography>
            <form className="my-6 space-y-6">
                <div className="flex flex-wrap gap-4">   
                    <Input className='basis-60 rounded-[5px]' type='email' placeholder='Username or Email'/>
                    <Input className='basis-60 rounded-[5px]' type='password' placeholder='Password'></Input>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant='outline'>LOGIN</Button>
                    <Checkbox id="terms" className='rounded-[4px]' />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                     Remember me
                    </label>
                </div>
                <Typography >Lost your password?</Typography>     
                <div className="px-2 py-4 rounded-[4px] bg-secondary">
                    <Typography>Have a Coupon Code? Click below to enter your code</Typography>           
                </div>
                <Input className='w-60 rounded-[5px]' type='text' placeholder='Enter Coupon Code'></Input>
                <Button className='font-normal rounded-[5px]'>Apply Coupon</Button>
            </form>

        </div>
        </ContainerV2>
    </Container>
  )
}

export default LoginSection