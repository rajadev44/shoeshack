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
          <div className='flex flex-wrap justify-between gap-4'>
            
              <div className='mb-8 space-y-4 md:mb-0 md:space-y-8 basis-full md:basis-1/4 grow'>
                <p className="text-xl font-semibold text-primary md:text-3xl" > ShoeShack</p>
                <p className='text-sm md:text-lg text-muted-primary text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis optio ...</p>
              </div>
              
              <div className='space-y-4 md:space-y-8 basis-1/4 md:basis-1/5'>
                <h2 className='font-medium text-md md:text-xl '>Quick Links</h2>
                <ul className='flex flex-col space-y-1 text-sm md:text-md'>
                  <li> <Link to='/about' className={` hover:underline hover:underline-offset-4 font-normal`}> About </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Offer & Discount </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Get Coupon </Link></li>
                  <li> <Link to='/contact' className={` hover:underline hover:underline-offset-4 font-normal`}> Contact Us </Link></li>
                </ul>
              </div>
              
              <div className='space-y-4 md:space-y-8 basis-1/4 md:basis-1/5'>
                <h2 className='font-medium text-md md:text-xl '>Quick Links</h2>
                <ul className='flex flex-col space-y-1 text-sm md:text-md'>
                  <li> <Link to='/about' className={` hover:underline hover:underline-offset-4 font-normal`}> About </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Offer & Discount </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Get Coupon </Link></li>
                </ul>
              </div>
              
              <div className='space-y-4 md:space-y-8 basis-1/4 md:basis-1/5'>
                <h2 className='font-medium text-md md:text-xl '>Quick Links</h2>
                <ul className='flex flex-col space-y-1 text-sm md:text-md'>
                  <li> <Link to='/about' className={` hover:underline hover:underline-offset-4 font-normal`}> About </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Offer & Discount </Link></li>
                  <li> <Link to='/' className={` hover:underline hover:underline-offset-4 font-normal`}> Get Coupon </Link></li>
                </ul>
              </div>
          </div>
          
          <div className='flex items-center justify-between'>
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