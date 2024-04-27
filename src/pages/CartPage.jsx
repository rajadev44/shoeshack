import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer';
import CartTable from '@/components/ui/cart-table';
import { HeroSectionV2 } from '@/components/sections/hero-section';
const CartPage = () => {
  return (
    <>
        <Header/>
        <HeroSectionV2>Cart</HeroSectionV2>
        <CartTable/>
        <Footer/>
    </>
  )
}

export default CartPage