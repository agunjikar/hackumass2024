import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register';
import Profile from './components/Profile';
import NewListing from './components/NewListing';
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newlisting" element={<NewListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
