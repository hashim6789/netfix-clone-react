import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Player from "./pages/player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("loginned");
        navigate("/");
      } else {
        console.log("not loginned");
        navigate("/login");
      }
    });
  }, []);
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/player/:movieId" element={<Player />}></Route>
      </Routes>
    </div>
  );
}

export default App;
