import Sidebar from "./components/sidebar/Sidebar";
import Top from "./components/topbar/Top";
import "./App.css"
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
function App() {
  return (
    <Router>
      <Top />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<User/>}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
