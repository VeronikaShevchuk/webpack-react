import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to ="/" />}/>

        </Routes>    
        

      </Router>

    </div>
  );
}

export default App;
