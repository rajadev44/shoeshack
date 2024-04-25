import { Button } from "../ui/button";
import Container, { ContainerV2 } from "../ui/container";
import { Textarea } from "../ui/textarea";
import Typography from "../ui/typography";
import Icon from "@/assets/icons";
import { Input } from "@/components/ui/input"


const ContactForm = () => {
  return (
    <Container>
      <ContainerV2 className="flex flex-wrap gap-10 mb-16 md:gap-5">
        <Typography element="h2" className="basis-full grow md:mb-5">Get In Touch</Typography>
        <form className="grid grid-cols-4 gap-5 basis-full md:basis-1/2 grow ">
              <Input required className='col-span-4 py-5 text-lg rounded-sm md:text-xl md:py-8 md:col-span-2 ring-1 ring-primary' type="text" placeholder="Enter Your Name" />
              <Input required className='col-span-4 py-5 text-lg rounded-sm md:text-xl md:py-8 md:col-span-2 ring-1 ring-primary' type="email" placeholder="Email" />
              <Input required className='col-span-4 py-5 text-lg rounded-sm md:text-xl md:py-8 ring-1 ring-primary' type="text" placeholder="Enter Subject" />
              <Textarea required className='col-span-4 py-5 text-lg rounded-sm md:text-xl md:py-8 ring-1 ring-primary' type="text" placeholder="Enter Message" />
              <Button  className='col-span-4 text-2xl rounded-sm md:col-span-1 py-7 ' > SEND </Button>
        </form>
            
        <span className='flex flex-col mt-10 space-y-5 basis-full grow md:basis-1/2'>
          <div className="flex space-x-4 ">
            <Icon as='span' className='text-2xl md:text-3xl' name='home'  />
            <Typography className="text-xl md:text-2xl" >Westminster Bridge</Typography>
          </div>
          <div className="flex space-x-4 ">
            <Icon as='span' className='text-2xl md:text-3xl' name='phone'  />
            <Typography className="text-xl md:text-2xl" >+44 123 45678 12</Typography>
          </div>
          <div className="flex space-x-4 ">
            <Icon as='span' className='text-2xl md:text-3xl' name='mail'  />
            <Typography className="text-xl md:text-2xl" >info@shoeshack.com</Typography>
          </div>
        </span>
      </ContainerV2>
    </Container>
  );
};

export default ContactForm;
