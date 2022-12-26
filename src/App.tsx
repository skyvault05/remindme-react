import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddSchedule from "./pages/AddSchedule";
import DemoApp from "./pages/DemoApp";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoApp />} />
      <Route path="/add" element={<AddSchedule />} />
      {/* <Route path="/demo" element={<DemoApp />} /> */}
      {/* <Route path="/edit:id" element={<AddSchedule />} /> */}
    </Routes>
  );
}

export default App;
