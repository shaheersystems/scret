import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SuggestionBar from "./components/SuggestionBar";
function App() {
  return (
    <div className="">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <SuggestionBar />
      </div>
    </div>
  );
}

export default App;
