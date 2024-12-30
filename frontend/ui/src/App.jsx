import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import EmployeeList from "./components/EmployeeList";
import InsertEmployee from "./components/InsertEmployee";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/insert" element={<InsertEmployee />} />
      </Routes>
      <Footer />
    </Router>
    </>

  );
}


export default App;
