import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route element={<Error />} path="error404" />
          <Route element={<Navigate to={"error404"} />} path="*" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
