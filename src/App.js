import { Sidebar, Home } from "./components";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login, Signup, Logout } from "./pages";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route index element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
