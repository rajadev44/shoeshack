import Container, { ContainerV2 } from '@/components/ui/container'
import Typography from '../ui/typography'

const aboutUsInformation = () => {
  return (
    <Container>
      <ContainerV2 >
        
      <div className="flex flex-col items-center justify-center mt-8 space-y-10 md:space-y-20 md:my-20 ">
        <div className=''>
          <Typography element='h4' className='pb-3 md:pb-4' >Our Mission</Typography>  
          <Typography like='p' className='font-normal text-justify' variant='muted'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
          </Typography>
          <Typography like='p' className='font-normal text-justify' variant='muted'>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model  eWAV text, and a search for  will uncover many web sites still in their infancy.
          </Typography>
        </div>
        
        <div className=''>
          <Typography element='h4' className='pb-3 md:pb-4' >Our Vision</Typography>  
          <Typography like='p' className='font-normal text-justify' variant='muted'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
          </Typography>
          <Typography like='p' className='font-normal text-justify' variant='muted'>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model  eWAV text, and a search for  will uncover many web sites still in their infancy.
          </Typography>
        </div>
      </div>
    
      
      </ContainerV2>
    </Container>
  )
}

export default aboutUsInformation