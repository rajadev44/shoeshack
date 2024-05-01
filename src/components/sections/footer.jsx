import Container, { ContainerV2 } from '@/components/ui/container'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <Container >
        <ContainerV2>
        <footer className='pt-8 space-y-8 md:space-y-10 md:pt-24'>
          <hr className='border-primary' />
          <div className='flex flex-wrap items-start justify-between gap-4 gap-y-10'>
            
              <div className='grid space-y-4 md:space-y-6 basis-80 grow md:place-items-start place-items-center'>
                <p className="text-xl font-semibold text-primary md:text-3xl" > ShoeShack</p>
                <p className='text-sm text-center md:text-normal text-muted-primary md:text-start lg:text-balance'> 
                ShoeShack is favorite choice for buying shoes online.
                </p>
              </div>
              
              <div className='grid space-y-4 md:space-y-8 grow basis-52 place-items-center md:place-items-start'>
                <h2 className='font-medium underline text-md md:text-xl underline-offset-4 md:no-underline'>Quick Links</h2>
                <ul className='flex flex-col space-y-1 text-sm text-center md:text-start md:text-md'>
                  <li> <Link to='' className={` hover:underline hover:underline-offset-4 font-normal`}> Shipping Policy </Link></li>
                  <li> <Link to='' className={` hover:underline hover:underline-offset-4 font-normal`}> Refund Policy </Link></li>
                  <li> <Link to='' className={` hover:underline hover:underline-offset-4 font-normal`}> Privacy Policy </Link></li>
                  <li> <Link to='' className={` hover:underline hover:underline-offset-4 font-normal`}> Terms of Service </Link></li>
                </ul>
              </div>
              
              <div className='grid space-y-4 md:space-y-8 grow basis-52 place-items-center md:place-items-start'>
                <h2 className='font-medium underline text-md md:text-xl underline-offset-4 md:no-underline'>Support</h2>
                <ul className='flex flex-col space-y-1 text-sm text-center md:text-start md:text-md'>
                  <li> <Link to='/contact' className={` hover:underline hover:underline-offset-4 font-normal`}> Contact </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> FAQs </Link></li>
                  <li> <Link to='/about' className={` hover:underline hover:underline-offset-4 font-normal`}> About </Link></li>
                </ul>
              </div>
              
              <div className='grid space-y-4 md:space-y-8 grow basis-52 place-items-center md:place-items-start'>
                <h2 className='font-medium underline text-md md:text-xl underline-offset-4 md:no-underline'>Contact Us</h2>
                <ul className='flex flex-col space-y-1 text-sm text-center md:text-start md:text-md'>
                  <li> <Link to='/about' className={` hover:underline hover:underline-offset-4 font-normal`}> Email </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Phone </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Address </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Whatsapp </Link></li>
                </ul>
              </div>
          </div>
          
          <div className='flex flex-col-reverse items-center justify-between pb-4 gap-y-1 md:flex-row'>
            <p className='text-sm text-muted-foreground md:text-md '>Copyright © 2024 All Rights Reserved </p>
            <ul className='flex text-neutral-500'>
              <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaFacebook /></Button></li>
              <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaInstagram /></Button></li>
              <li><Button variant='icon' size='icon' className='text-md md:text-lg'  >< FaTiktok /></Button></li>
            </ul>
          </div>
        </footer>

      </ContainerV2>

    </Container>
  )
}

export default footer