import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import bgViolet from "./assets/bgViolet.png";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bgViolet})` }}
      className={`bg-cover bg-center h-cover
  w-cover`}
    >
      <Navbar />
      <div className=" h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
