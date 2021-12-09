import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Cart from './pages/Cart';

function App() {
return (
    <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/product"> Product </Link>
                </li>
                <li>
                    <Link to="/category"> Category </Link>
                </li>
                <li>
                    <Link to="/cart"> Cart </Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
    );
}

export default App;
