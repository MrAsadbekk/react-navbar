import "./App.css";
// import TestInput from "./components/testInput/TestInput";
// import Data from "./components/data/Data";
import Restcountries from "./components/Restcountries/Restcountries";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";

function App() {
  return (
    <div className="App">
      {/* <TestInput /> */}
      {/* <Data /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Restcountries />} path="/" />
          <Route element={<Error />} path="error404" />
          <Route element={<Navigate to={"error404"} />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
