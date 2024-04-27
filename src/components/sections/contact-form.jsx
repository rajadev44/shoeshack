import { Button } from "../ui/button";
import Container, { ContainerV2 } from "../ui/container";
import { Textarea } from "../ui/textarea";
import Typography from "../ui/typography";
import Icon from "@/assets/icons";
import { Input } from "@/components/ui/input"


const ContactForm = () => {
  return (
    <Container>
      <ContainerV2 className="flex flex-wrap gap-x-10 mb-14 md:gap-x-5 gap-y-10">
        <Typography element="h4" className="basis-full grow md:mb-5">Get In Touch</Typography>
        <form className="grid grid-cols-4 gap-5 basis-1/3 grow ">
              <Input required className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 md:col-span-2 ring-1 ring-primary' type="text" placeholder="Enter Your Name" />
              <Input required className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 md:col-span-2 ring-1 ring-primary' type="email" placeholder="Email" />
              <Input required className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 ring-1 ring-primary' type="text" placeholder="Enter Subject" />
              <Textarea required className='col-span-4 py-4 text-lg rounded-[4px] md:text-sm md:py-2 ring-1 ring-primary h-48' type="text" placeholder="Enter Message" />
              <Button  className='col-span-4  md:col-span-1 rounded-[5px]' > SEND </Button>
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
