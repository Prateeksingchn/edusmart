import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="w-full h-full overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
