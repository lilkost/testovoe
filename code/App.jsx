import Header from "./components/header/Header"
import Home from './components/home/Home';
import Products from './components/products/Products';
import Favorites from "./components/Favorites/Favorites";
import ProductDeatil from "./components/products/ProductDeatil";
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Header/>
      <main className="main container">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/products/:id" element={<ProductDeatil/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App