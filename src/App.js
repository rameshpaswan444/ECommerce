import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetail from './customer/components/ProductDetails/ProductDetail';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
function App() {
  return (
    <div className="">
    <Navigation/>
      <div>
        {/* <HomePage/> */}
       {/*<Product/> */} 
       {/*<ProductDetail/> */}
      {/* <Cart/>*/} 
      <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
