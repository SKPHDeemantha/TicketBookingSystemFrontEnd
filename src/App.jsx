import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ViewMovies from "./pages/ViewMovie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view" element={<ViewMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
