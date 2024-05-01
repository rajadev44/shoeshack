
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { toast } from "react-toastify"
import { useState } from "react"
import Typography from "@/components/ui/typography"
import Footer from "@/components/sections/footer";
export default function SignUp() {
    
  const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(8).max(20),
    email: yup.string().email().required()
  });

  const [form, setForm] = useState({
    username: '',
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

 
  const navigate = useNavigate();
  
  const handleSignUp = () => {
    const {username, email, password} = form; 
    loginSchema.validate({username, email, password})
      .then(()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: form.username
          })
          
          toast.success('Thanks For Registration', {
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
          navigate("/login");
          setErrors([])
        })
        .catch(() => {
          setErrors( ["something went wrong, please try again with different username"]);
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
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription className='text-center'>
          Enter username and password to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="username"
              name='username'
              onChange={handleChange}
              value={form.username}
              placeholder="raja"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name='email'
              onChange={handleChange}
              value={form.email}
              placeholder="raja@gmail.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              name='password'
              value={form.password}
              onChange={handleChange} 
              placeholder='***********' 
              />
          </div>
          {errors && errors.map(err=>(
            <Typography key={err} className="px-2 text-sm text-center md:text-xs" variant="error">{err}</Typography>
          ))}
          <Button onClick={handleSignUp} type="submit" className="w-full">
            Sign up
          </Button>
        </div>
        <div className="mt-4 text-sm text-center">
          Do you already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
    </ContainerV2>
    </Container>
    <Footer/>
    </>
  )
}
