import logo from "./logo.svg";
import "./App.css";
import { Watermark } from "antd";
import Home from "./components/Home/Home";

function App() {
  return (
    <Watermark content={"Created By Ravi Bhashkar"} className="h-screen">
      <div className="App">
        <Home />
      </div>
    </Watermark>
  );
}

export default App;
