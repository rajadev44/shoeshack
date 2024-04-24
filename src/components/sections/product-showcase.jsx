import Container from "../ui/container";

const Showcase = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 mt-8 md:mt-14 md:grid-cols-12 ">
        <img className="w-full rounded-t-sm md:col-span-12" alt='banner' src="/banner-1-optimized.webp"/>
        <img className="w-full rounded-b-sm md:col-span-4" alt='banner' src="/banner-2.jpg"/>
        <img className="w-full md:col-span-4" alt='banner' src="/banner-3.webp"/>
        <img className="w-full rounded-b-sm md:col-span-4" alt='banner' src="/banner-4.jpg"/>
      </div>
    </Container>
  )
}

export default Showcase