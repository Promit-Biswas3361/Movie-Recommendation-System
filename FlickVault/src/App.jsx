import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Frontend/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/" element={} />
        <Route path="/" element={} />
        <Route path="/" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
