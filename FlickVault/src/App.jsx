import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Frontend/Landing";
import Watchlist from "./Frontend/Watchlist";
import AboutUs from "./Frontend/AboutUs";
import ContactUs from "./Frontend/ContactUs";
import Profile from "./Frontend/Profile";
import Favourites from "./Frontend/Favourites";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
