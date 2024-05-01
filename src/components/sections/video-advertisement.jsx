import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Container from "../ui/container";

const VideoAdvertisement = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="relative grid mt-8 bg-black place-items-center md:mt-14">
                <video className='w-full aspect-video mix-blend-plus-lighter' autoPlay muted loop id='myVideo'>
                    <source src='/shoe-video.mp4' type='video/mp4' />
                </video>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4 md:gap-10 lg:justify-end lg:mb-16 ">    
                <h3 className="text-xl font-bold md:text-3xl text-primary-foreground ">Discover Our Shoe Collection</h3>
                <Button className='rounded-sm animate-bounce hover:animate-none' onClick={()=>{navigate('/shop')}}>  Shop Now </Button>
                </div>
            </div>
        </Container>
    );
};

export default VideoAdvertisement;
