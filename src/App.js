import "./App.css";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex">
      <Sidebar show={show} />
      <Dashboard show={show} setShow={setShow} />
    </div>
  );
}

export default App;
