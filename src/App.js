import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Account />} path="/Account" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Error />} path="error404" />
        <Route element={<Navigate to={"error404"} />} path="*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
