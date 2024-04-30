import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const Typography = ({ element, className: style = '', children, variant, like }) => {
    let className = '';
    like = like || element; // If `like` prop is not provided, default to `element`

    // Default styles handling based on `variant`
    switch (variant) {
        case 'primary':
            className = 'text-primary';
            break;
        case 'secondary':
            className = 'text-secondary';
            break;
        case 'muted':
            className = 'text-muted-foreground';
            break;
        case 'error':
            className = 'text-destructive';
            break;
        default:
            className = 'text-primary';
    }


    // Adding responsive font sizes based on the `like` prop
    switch (like) {
        case 'h1':
            className += ' text-4xl md:text-5xl lg:text-6xl font-semibold ';
            break;
        case 'h2':
            className += ' text-3xl md:text-4xl lg:text-5xl font-semibold'
            break;
        case 'h3':
            className += ' text-2xl md:text-3xl lg:text-4xl font-semibold'
            break;
        case 'h4':
            className += ' text-xl md:text-2xl lg:text-3xl font-semibold'
            break;
        case 'h5':
            className += ' text-lg md:text-xl lg:text-2xl font-semibold'
            break;
        case 'h6':
            className += ' text-base md:text-lg lg:text-xl font-semibold'
            break;
        case 'p':
            className += ' text-base md:text-lg'
            break;
        case 'span':
            className += ' text-sm md:text-base'
            break;
        default:
            className += ' text-base md:text-lg'
    }

    // Return element based on `element` prop
    const Element = element || 'p';  // Default to paragraph if not specified
    return <Element className={cn(className.trim(), style)}>{children}</Element>;
}

// Props validation
Typography.propTypes = {
    element: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    like: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Typography;
