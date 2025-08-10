import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import bgViolet from "./assets/bgViolet.png";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./context/authContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div
      style={{ backgroundImage: `url(${bgViolet})` }}
      className={`bg-cover bg-center h-cover
  w-cover`}
    >
      <div className=" max-h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
