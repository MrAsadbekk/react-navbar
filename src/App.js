import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Account />} path="/Account" />
          <Route element={<Error />} path="error404" />
          <Route element={<Navigate to={"error404"} />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
