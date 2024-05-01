import { Button } from "../ui/button";
import * as yup from 'yup';
import Container, { ContainerV2 } from "../ui/container";
import { Textarea } from "../ui/textarea";
import Typography from "../ui/typography";
import Icon from "@/assets/icons";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [errors, setErrors] = useState([])

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  let schema = yup.object().shape({
    name: yup.string().required(),
    phone:yup.string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, "Phone number is not valid, must be 11 digits")
    .max(11, "Phone number is not valid, must be 11 digits"),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });
  


const handleSubmit =(e)=>{
  
  
  
  e.preventDefault();
  const [name, email , subject , phone, message] = Object.entries(e.target).map((entry)=>(entry[1].value));
  console.log(phone)
  // check validity
  schema
    .validate({name, phone, email, message, subject})
    .then(function (valid) {
      console.log(valid)
      toast.success('Sent', {
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
    }).catch((err)=>{
      setErrors(err.errors)
    })
    ;
  }

  return (
    <Container>
      <ContainerV2 className="flex flex-wrap gap-x-10 mb-14 md:gap-x-5 gap-y-10">
        <Typography element="h4" className="basis-full grow md:mb-5">Get In Touch</Typography>
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-5 basis-1/3 grow ">
              <Input name='name'  className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 md:col-span-2 ring-1 ring-primary' type="text" placeholder="Enter Your Name" />
              <Input name='email'  className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 md:col-span-2 ring-1 ring-primary' type="email" placeholder="Email" />
              <Input name='subject'  className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 ring-1 ring-primary' type="text" placeholder="Enter Subject" />
              <Input name='phone'  className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 ring-1 ring-primary' type="number" placeholder="Phone" />
              <Textarea name='message'  className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 ring-1 ring-primary h-48' type="text" placeholder="Enter Message" />
              {errors && errors.map((err,key)=>  <Typography key={key} className="col-span-4 text-sm text-center md:text-xs" variant="error">{err}</Typography>)}
              <Button  className='col-span-4  md:col-span-1 rounded-[5px]' type='submit' > SEND </Button>
        </form>
            
        <span className='flex flex-col space-y-5 basis-full md:basis-72 '>
          <div className="flex justify-center space-x-4 md:justify-start ">
            <Icon as='span' className='text-2xl md:text-3xl' name='home'  />
            <Typography className="text-lg md:text-xl" >Westminster Bridge</Typography>
          </div>
          <div className="flex justify-center space-x-4 md:justify-start ">
            <Icon as='span' className='text-2xl md:text-3xl' name='phone'  />
            <Typography className="text-lg md:text-xl" >+44 123 45678 12</Typography>
          </div>
          <div className="flex justify-center space-x-4 md:justify-start ">
            <Icon as='span' className='text-2xl md:text-3xl' name='mail'  />
            <Typography className="text-lg md:text-xl" >info@shoeshack.com</Typography>
          </div>
        </span>
      </ContainerV2>
    </Container>
  );
};

export default ContactForm;
