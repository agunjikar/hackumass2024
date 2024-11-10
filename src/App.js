import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register';
import OngoingBid from "./components/OngoingSelling";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
