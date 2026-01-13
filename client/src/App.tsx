import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="**" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
