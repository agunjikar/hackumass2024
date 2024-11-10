import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register';
import OngoingBid from "./components/OngoingSelling";
import Profile from './components/Profile';
import NewListing from './components/NewListing';
import Listing from './components/Listing'
import Discovery from "./components/Discovery";
import Wishlist from "./components/Wishlist";
import Login from "./components/login";
import Verify from "./components/Verify";
import PlaceBid from './components/PlaceBid';
import OrderConfirmed from './components/OrderConfirmed';
import './global.css'
import CompletedBid from "./components/CompletedBuying";
import CompletedSelling from "./components/CompletedSelling";
import CompletedBuying from "./components/CompletedBuying";
import OngoingSelling from "./components/OngoingSelling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="ongoingselling" element={<OngoingSelling />} />
          <Route path="completedbuying" element={<CompletedBuying />} />
          <Route path="completedselling" element={<CompletedSelling />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newlisting" element={<NewListing />} />
          <Route path="listing" element={<Listing />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="verify" element={<Verify />} />
          <Route path="placeBid" element={<PlaceBid />} />
          <Route path="orderConfirmed" element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
