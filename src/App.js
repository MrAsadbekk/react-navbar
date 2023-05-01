import "./App.css";
import Home from "./components/Home/Home";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/error/Error";

function App() {
  return (
    <div className="App">
      {/* <TestInput /> */}
      {/* <Data /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Error />} path="error404" />
          <Route element={<SingleArticle />} path="name/:name" />
          {/* <Route element={<Navigate to={"error404"} />} path="*" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
