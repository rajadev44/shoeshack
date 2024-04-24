import Container from "../ui/container"
import { Headset, Truck } from "lucide-react"
const service = () => {
  return (
    <Container>
        <div className="flex flex-wrap justify-between gap-4 mt-8 md:mt-28 ">
            <div className="flex flex-col p-5 space-y-2 rounded-sm grow lg:basis-1/4 bg-primary text-primary-foreground">
                <Truck className="w-[1em] h-[1em] text-9xl" />
                <h2 className="text-4xl font-medium">Free Shipping</h2>
                <p className="text-muted">Description goes here, tagline goes here..</p>
            </div>
            <div className="flex flex-col p-5 space-y-2 rounded-sm grow lg:basis-1/4 bg-primary text-primary-foreground">
                <svg  className={`w-[1em] h-[1em] text-9xl`}  width="82" height="67" viewBox="0 0 82 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.1 0.1675V6.9345C61.295 8.576 73.8 19.832 73.8 33.5C73.8 44.2535 65.928 53.6 54.448 57.888L45.1 50.25V67H65.6L60.598 62.913C73.431 57.1845 82 46.096 82 33.5C82 16.147 65.805 1.8425 45.1 0.1675ZM36.9 0C28.905 0.67 21.32 3.216 15.088 7.4035L20.91 12.1605C25.5644 9.22987 31.0776 7.34715 36.9 6.7V0ZM9.02 12.328C3.936 17.42 0.82 23.6175 0 30.15H8.2C8.979 25.393 11.275 20.8705 14.883 17.085L9.02 12.328ZM16.4 20.1V26.8H28.7V30.15H24.6C20.09 30.15 16.4 33.165 16.4 36.85V46.9H36.9V40.2H24.6V36.85H28.7C33.251 36.85 36.9 33.8685 36.9 30.15V26.8C36.9 25.023 36.0361 23.3189 34.4983 22.0624C32.9605 20.8059 30.8748 20.1 28.7 20.1H16.4ZM41 20.1V36.85H53.3V46.9H61.5V36.85H65.6V30.15H61.5V20.1H53.3V30.15H49.2V20.1H41ZM0 36.85C0.82 43.3825 3.977 49.58 9.102 54.672L14.924 49.915C11.3226 46.1155 9.00407 41.6106 8.2 36.85H0ZM20.951 54.8395L15.088 59.5965C21.3175 63.7523 28.9003 66.3261 36.9 67V60.3C31.0847 59.6688 25.5799 57.7841 20.951 54.8395Z" fill="white"/>
                </svg>
                <h2 className="text-4xl font-medium lining-nums">24/7</h2>
                <p className="text-muted">Description goes here, tagline goes here..</p>
            </div>
            <div className="flex flex-col p-5 space-y-2 rounded-sm grow lg:basis-1/4 bg-primary text-primary-foreground">
                <Headset className="w-[1em] h-[1em] text-9xl" />
                <h2 className="text-4xl font-medium">Customer Support</h2>
                <p className="text-muted">Description goes here, tagline goes here..</p>
            </div>
        </div>
    </Container>
  )
}

export default service