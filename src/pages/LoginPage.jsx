
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Container, { ContainerV2 } from "@/components/ui/container"
import { Link, useNavigate } from "react-router-dom"
import Header from "@/components/sections/header"
import * as yup from 'yup';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { login } from "@/features/authentication"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { useState } from "react"
import Typography from "@/components/ui/typography"

export default function LoginForm() {
  
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value
    });
    
  }
  
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    const { email, password} = form; 
    loginSchema.validate({email, password})
      .then(()=>{
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          dispatch(login({email: user.email, username: user.displayName}));
          
          toast.success('Welcome '+ user.displayName, {
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
          navigate('/dashboard')
        })
        .catch(() => {
          setErrors( ["Invalid Credentials"]);
        });
        
    })
    .catch((err)=>{
      setErrors(err.errors)
    })
  }


  return (
    <>
    <Header/>
    <Container>
    <ContainerV2  className="grid my-20 md:my-28 place-items-center">
    <Card className="max-w-sm mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your Email and password below to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="text"
              placeholder="raja@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password" 
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password" placeholder='***********' required />
          </div>
          {errors && errors.map(err=>(
            <Typography key={err} className="px-2 text-sm md:text-xs" variant="error">{err}</Typography>
          ))}
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" className="underline" >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    
    </ContainerV2>
    </Container>
    
    </>
  )
}
