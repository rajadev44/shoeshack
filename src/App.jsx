import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ProductPage from './pages/ProductPage' 
import Shop from './pages/Shop'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/LoginPage';
import SignUp from './pages/SignUp';
import ProtectedRoute from "./components/sections/protected-route";
import UnProtectedRoute from "./components/sections/un-protected-route";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path='/individual-product-page' element={<ProductPage/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path='/cart' element={<CartPage/>} />
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard/></ProtectedRoute>}/>
          <Route path="/login" element={<UnProtectedRoute><Login/></UnProtectedRoute>}/>
          <Route path="/sign-up" element={<UnProtectedRoute><SignUp/></UnProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
