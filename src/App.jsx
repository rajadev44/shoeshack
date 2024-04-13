import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstSection from "./pages/FirstSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<FirstSection />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
