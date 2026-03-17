import './App.css'
import './index.css'
import { Routes, Route } from "react-router";
import {Login} from "./pages/login.tsx";

function App() {

  return (
      <div className="p-4">
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
      </div>
  )
}

export default App
