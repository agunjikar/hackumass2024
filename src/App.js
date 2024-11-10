import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register';
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
