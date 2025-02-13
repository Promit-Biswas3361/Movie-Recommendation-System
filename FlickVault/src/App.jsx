import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Frontend/Landing";
import Watchlist from "./Frontend/Watchlist";
import AboutUs from "./Frontend/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
