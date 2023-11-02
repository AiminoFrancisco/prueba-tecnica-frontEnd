import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/SideBar";

export default function App() {
  return (
    <Router>
      <div className="w-full h-full bg-black">
        <Sidebar />
      </div>
    </Router>
  );
}
