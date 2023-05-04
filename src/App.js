import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import Login from "./components/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {!token ? (
          <Route element={<Login />} path="/" />
        ) : (
          <Route element={<Home />} path="/" />
        )}
        <Route element={<Account />} path="/account" />
        <Route element={<Error />} path="error404" />
        <Route element={<Navigate to={"error404"} />} path="*" />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
