import Container, { ContainerV2 } from "../ui/container"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import Icons from "../../assets/icons"
import Menu from "@/components/ui/menu";
import { Menu as MenuIcon } from "lucide-react";

const header = () => {
  return (
    <Container>
      <ContainerV2>
        
    <header className="my-3 md:my-8">
      <div className='flex items-center justify-between'>
        
        <div className="flex items-center justify-center space-x-1">
          <menu className="md:hidden">
            <Menu>
              <MenuIcon className={`w-[1em] h-[1em] text-xl mt-1  text-primary-secondary font-normal`}/>
            </Menu>
          </menu>
          <div className='flex text-xl font-semibold md:text-3xl'>
            <p className="text-primary" > ShoeShack</p>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className='flex space-x-4'>
            <li> <Button variant={`${window.location.pathname === '/' && ''}`} className='' > <Link to='/' className={`text-xl font-normal`}> Home </Link></Button></li>
            <li> <Button variant={`${window.location.pathname === '/shop' && ''}`} className='' > <Link to='/shop' className={`text-xl font-normal`}> Shop </Link></Button></li>
            <li> <Button variant={`${window.location.pathname === '/about' && ''}`} className='' > <Link to='/about' className={`text-xl font-normal`}> About </Link></Button></li>
            <li> <Button variant={`${window.location.pathname === '/contact' && ''}`} className='' > <Link to='/contact' className={`text-xl font-normal`}> Contact </Link></Button></li>
          </ul>
        </nav>
        <div>
          <ul className="flex space-x-1 md:space-x-4">
            {/* <li> <Icons name='search'/>  </li> */}
            <li> <Link to='/dashboard'><Icons name='user'/> </Link>    </li>
            <li> <Link to='/cart'><Icons name='cart'/> </Link>    </li>
          </ul>
        </div>
      </div>
    </header>
    </ContainerV2>
    </Container>   
  )
}

export default header