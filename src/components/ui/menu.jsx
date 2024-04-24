import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const menu = ({children}) => {
    return (
      <Menubar className='border-none'>
        <MenubarMenu >
          <MenubarTrigger >{children}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className={`${window.location.pathname  === '/'  && 'bg-primary text-primary-foreground'}`  }><Link to='/' > Home </Link > </MenubarItem>
            <MenubarItem className={`${window.location.pathname  ==='/shop'  && 'bg-primary text-primary-foreground'}`  }><Link to='/shop'  > Shop </Link > </MenubarItem>
            <MenubarItem className={`${window.location.pathname  === '/about' && 'bg-primary text-primary-foreground'}` } ><Link to='/about' > About </Link > </MenubarItem>
            <MenubarItem className={`${window.location.pathname  === '/contact' && 'bg-primary text-primary-foreground'}` } ><Link to='/contact'> Contact </Link> </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
};

export default menu;
