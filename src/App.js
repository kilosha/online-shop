import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";


function App() {
  const user = true;

  return (
    <Router>
       <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/login" element={user ? <Navigate to="/" replace />  : <Login/>} />
          <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register/>} />
        </Routes >
    </Router>
  );
}

export default App;
