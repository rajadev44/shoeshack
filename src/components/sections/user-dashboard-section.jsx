import Container , { ContainerV2 } from "../ui/container"
import { CircleDollarSign,  Download, LayoutDashboard,  LogOutIcon, Map,  ShoppingBasket, User } from "lucide-react";
import Typography from "../ui/typography";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { logout } from "@/features/authentication";
import { useDispatch } from "react-redux";

const UserDashboardSection = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("uid", uid)
        } else {
          console.log("user is logged out")
        }
      });
  }, [])
  
  const dispatch = useDispatch(); 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      dispatch(logout())
      navigate("/");
      console.log("Signed out successfully")
    });
  }
  
  return (
    <Container>
        <ContainerV2>
            
            <div className="flex flex-wrap gap-10 my-16 md:my-20">
                {/* dashboard vertical navigation section contains links Dashboard with icon of meter, order with icon, downloads with icon, address with icon, payment with icon Account with icon and logout with icon. each items has border bottom for looking beautiful  (note: use lucide-react component icon) */}
                <div className="basis-full md:basis-56">
                        <button className="flex items-center w-full py-3 border-t border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Dashboard
                            </Typography>
                            <LayoutDashboard className="ml-auto"/>
                        </button>
                        <button className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Orders
                            </Typography>
                            <ShoppingBasket className="ml-auto"/>
                        </button>
                        <button className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Downloads
                            </Typography>
                            <Download className="ml-auto"/>
                        </button>
                        <button className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Addresses
                            </Typography>
                            <Map className="ml-auto"/>
                        </button>
                        <button className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Payment Methods
                            </Typography>
                            <CircleDollarSign className="ml-auto"/>
                        </button>
                        <button className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Account Details
                            </Typography>
                            <User className="ml-auto"/>
                        </button>
                        <button onClick={handleLogout} className="flex items-center w-full py-3 border-b border-gray-300 hover:bg-secondary">
                            <Typography>
                            Logout
                            </Typography>
                            <LogOutIcon className="ml-auto"/>
                        </button>
                </div>
                <div className="basis-96 grow">
                    <Typography variant='muted' className="text-xs md:text-sm">
                        Order #29 was placed on April 17, 2024 and is currently Completed.
                    </Typography>

                    <Typography className="my-4" like="h5">Order Detail</Typography>
                    <div className="flex items-center  px-1 py-2 bg-secondary rounded-[4px]">
                      <Typography className="text-lg basis-1/2 md:text-lg">Product</Typography>
                      <Typography className='basis-1/2' variant="muted">Total</Typography>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 ">
                      <Typography className="text-lg basis-1/2 md:text-lg">Shoes x 2</Typography>
                      <Typography className='basis-1/2' variant="muted">£100.00</Typography>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 bg-secondary rounded-[4px]">
                      <Typography className="text-lg basis-1/2 md:text-lg">Subtotal</Typography>
                      <Typography className='basis-1/2' variant="muted">£100.00</Typography>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 ">
                      <Typography className="text-lg basis-1/2 md:text-lg">Shipping</Typography>
                      <Typography className='basis-1/2' variant="muted">Free Shipping</Typography>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 bg-secondary rounded-[4px]">
                      <Typography className="text-lg basis-1/2 md:text-lg">Payment Method:</Typography>
                      <Typography className='basis-1/2' variant="muted">Direct Bank Transfer</Typography>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 ">
                      <Typography className="text-lg basis-1/2 md:text-lg">Total</Typography>
                      <Typography className='basis-1/2' variant="muted">£100.00</Typography>
                    </div>
                    
                    <Button size='sm' className='mt-10 rounded-[4px]' onClick={()=>{navigate("/shop")}}> ORDER AGAIN </Button>
                </div>
            </div>
        </ContainerV2>
    </Container>
  )
}

export default UserDashboardSection