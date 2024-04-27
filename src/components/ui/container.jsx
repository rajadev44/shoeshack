import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';

export default function container({className ='px-3', children }) {
  const style = cn("w-full m-auto mx-auto max-w-screen-xl ", className);
  
  return (
    <section className={`${style} `}>
        {children}
    </section>
  )
}

export function ContainerV2({className: style, children }) {
  const className = cn("w-full mx-auto max-w-screen-xl", style);
  
  return (
    <div className={`${className}  `}>
        {children}
    </div>
  )
}

ContainerV2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}