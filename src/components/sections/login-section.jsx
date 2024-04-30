import { useState } from "react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import Container, { ContainerV2 } from "../ui/container"
import { Input } from "../ui/input"
import Typography from "../ui/typography"
import * as yup from 'yup'
import { toast } from "react-toastify"


import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useDispatch, useSelector } from "react-redux"
import { login } from "@/features/authentication"


const LoginSection = () => {

  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState('')
  const [errors, setErrors] = useState([]);
  const [couponErrors, setCouponErrors] = useState([]);
  const loginSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8, 'Password must be at least 8 characters').max(20, 'Password must not exceed 20 characters')
      
  });
  const couponSchema = yup.object().shape({
    coupon: yup.string().required()
  })

  const applyCoupon = () => {
    couponSchema.validate({coupon})
    .then(()=>{
      toast.success('Coupon Applied', {
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
      setCouponErrors([])
    })
    .catch((err)=>{
      setCouponErrors(err.errors)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const [email, password] = Object.entries(e.target).map((entry)=>(entry[1].value));
    loginSchema.validate({email, password})
      .then(()=>{
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(login(user));
          toast.success('Login Successful', {
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
          setErrors([])
        })
        .catch(() => {
          setErrors( ["Invalid Credentials"]);
        });
        
    })
    .catch((err)=>{
      setErrors(err.errors)
    })
  }

  
  const isAuthenticated = useSelector((state)=>state.auth.authenticated);

  return (
    <Container>
        <ContainerV2>
        <div className='my-8 md:my-16'>
            <Typography variant='muted' className="text-xs md:text-sm">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer,  proceed to the Shipping & Billing. </Typography>
            <form className="my-6 space-y-6" onSubmit={handleLogin}>
                <div className="flex flex-wrap gap-4">   
                    <Input disabled={isAuthenticated} className='basis-60 rounded-[5px]' type='text' placeholder='Email'/>
                    <Input disabled={isAuthenticated} className='basis-60 rounded-[5px]' type='password' placeholder='Password'></Input>
                    {errors && errors.map(err=>(
                      <Typography key={err} className="col-span-4 px-2 text-sm basis-full md:text-xs" variant="error">{err}</Typography>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Button disabled={isAuthenticated} type='submit'>LOGIN</Button>
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
                <Input value={coupon} onChange={(e)=>{setCoupon(e.target.value)}} className='w-60 rounded-[5px]' type='text' placeholder='Enter Coupon Code'></Input>
                    {couponErrors && couponErrors.map(err=>(
                      <Typography key={err} className="col-span-4 px-2 text-sm md:text-xs" variant="error">{err}</Typography>
                    ))}
                <Button onClick={applyCoupon} className='font-normal rounded-[5px]'>Apply Coupon</Button>
            </form>

        </div>
        </ContainerV2>
    </Container>
  )
}

export default LoginSection