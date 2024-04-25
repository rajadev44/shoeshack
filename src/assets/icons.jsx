import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Mail, Menu, Phone, Search, ShoppingCart, UserRound } from "lucide-react";

const icons = {
    search: Search,
    user: UserRound,
    cart: ShoppingCart,
    menu: Menu,
    home: Home,
    mail: Mail,
    phone: Phone
};



const Icon = ({ className, name, as: Component = Button, onClick, ...props }) => {
    const IconComponent = icons[name];
    const defaultClass = cn('w-[1em] h-[1em] text-lg md:text-xl text-primary-secondary font-normal', className);

    if (!IconComponent) return null;

    const isButton = Component === Button;
    const buttonProps = isButton ? { variant: 'ghost', size: 'icon', onClick } : {};

    return (
        <Component {...(isButton ? buttonProps : {})}  >
            <IconComponent className={defaultClass} {...props} />
        </Component>
    );
};

// Adding PropTypes
Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.oneOf(Object.keys(icons)).isRequired,
    as: PropTypes.elementType,
    onClick: PropTypes.func  // Add other PropTypes as needed based on what props you might pass
};

export default Icon;
