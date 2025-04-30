import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import bgBlue from "./assets/bgBlue.jpg";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bgBlue})` }}
      className={`bg-cover bg-center h-full
  w-full`}
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
