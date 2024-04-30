import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';

const heroSection = () => {

  return (
    <Container className='px-1'>
            <div className="flex items-center justify-center h-[30vh] md:h-[60vh] relative">
                <div className='absolute top-0 w-full h-full overflow-hidden rounded-sm bg-primary -z-10'>
                 <img alt='hero-section' src='/hero-section-bg.jpg' className='object-cover w-full h-full rounded-sm' />
                </div>
                <div className="space-y-4 text-center md:space-y-8 text-primary-foreground">
                    <h1 className={`text-3xl font-bold md:text-6xl `}>Welcome to ShoeShack</h1>
                    <p className="text-xl font-normal capitalize md:text-2xl text-primary-secondary ">The best place to buy shoes</p>
                    <Button size={'lg'} variant={''} className='rounded-sm animate-bounce' > Shop Now</Button>
                </div>
            </div>
    </Container>
  )
}

export const HeroSectionV2 = ({children}) => {
  return (
    <Container className='px-1'>
            <div className="flex items-center justify-center h-[40vh] md:h-[60vh] relative">
                <div className='absolute top-0 w-full h-full overflow-hidden rounded-none bg-primary -z-10'>
                 <img alt='hero-section' src='/hero-section-bg-2.png' className='object-cover w-full h-full rounded-none' />
                </div>
                <div className="space-y-4 text-center md:space-y-8 text-primary">
                    <h1 className={`text-3xl font-bold md:text-5xl capitalize`}>{children}</h1>
                </div>
            </div>
    </Container>
  )
}


HeroSectionV2.defaultProps = {  
  children: 'About Us'
}

HeroSectionV2.propTypes = {
  children: PropTypes.string
}  

export default heroSection;