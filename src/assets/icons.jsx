import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react"

const  icon = ({className, name, onClick}) => {
    const defaultClass = 'w-[1em] h-[1em] text-lg md:text-xl text-primary-secondary font-normal ';
    switch (name) {
        case 'search':
            return (<Button onClick={onClick} variant='ghost' size='icon'><Search className={`${defaultClass} ${className}  `}/> </Button>)
        case 'user':
            return (<Button onClick={onClick} variant='ghost' size='icon'><UserRound className={`${defaultClass} ${className} `}/></Button>)
        case 'cart':
            return (<Button onClick={onClick} variant='ghost' size='icon'><ShoppingCart className={`${defaultClass} ${className} `}/></Button>)
        case 'menu':
            return (<Button onClick={onClick} variant='ghost' size='icon'><Menu className={`${defaultClass} ${className} `}/></Button>)
        
        default:
            return null;
    }

}

export default icon