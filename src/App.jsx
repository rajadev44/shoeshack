import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/> */}
          <Route path="/about" element={<About/>}/>
          <Route path="checkout" element={Checkout}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
