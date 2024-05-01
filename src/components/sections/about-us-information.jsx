import Container, { ContainerV2 } from '@/components/ui/container'
import Typography from '../ui/typography'

const aboutUsInformation = () => {
  return (
    <Container>
      <ContainerV2 >
        
      <div className="flex flex-col items-center justify-center mt-8 space-y-10 md:space-y-20 md:my-20 ">
        <div className=''>
          <Typography element='h4' className='pb-3 text-center md:pb-4 md:text-start' >Our Mission</Typography>  
          <Typography like='p' className='font-normal text-center md:text-justify' variant='muted'>
          At ShoeShack, our mission is to provide our customers with the highest quality footwear and an exceptional shopping experience.

          </Typography>
          <Typography like='p' className='font-normal text-center md:text-justify' variant='muted'>
          We are passionate about fashion, innovation, and customer satisfaction. Our goal is to empower our customers to express their personal style through the perfect pair of shoes.
          </Typography>
        </div>
        
        <div className=''>
          <Typography element='h4' className='pb-3 text-center md:pb-4 md:text-start' >Our Vision</Typography>  
          <Typography like='p' className='font-normal text-center md:text-justify' variant='muted'>
          Our vision is to become the premier destination for stylish, comfortable, and durable shoes. We strive to curate a diverse collection of footwear that caters to the diverse needs and preferences of our customers. By continuously expanding our product offerings, leveraging the latest technologies, and delivering unparalleled customer service, we aim to be the go-to choice for anyone seeking the perfect pair of shoes to complement their lifestyle.
          </Typography>
          <Typography like='p' className='font-normal text-center md:text-justify' variant='muted'>
          We envision a future where our customers can effortlessly find the shoes that not only look great but also provide the comfort and support they need, whether they're dressing up for a special occasion, commuting to work, or embarking on an adventure. Through our commitment to innovation, sustainability, and customer-centric values, we strive to be a trusted and beloved brand that empowers our customers to step out in style and confidence.
          </Typography>
        </div>
      </div>
    
      
      </ContainerV2>
    </Container>
  )
}

export default aboutUsInformation