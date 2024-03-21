import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Footer from "./components/Footer";
//images
import bannerMens from "../src/assets/bannermens.png";
import bannerWomens from "../src/assets/bannerwomens.png";
import bannerKids from "../src/assets/bannerkids.png";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="men" banner={bannerMens} />}
          />
          <Route
            path="/womens"
            element={<Category category="women" banner={bannerWomens} />}
          />
          <Route
            path="/kids"
            element={<Category category="kid" banner={bannerKids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </>
  );
};

export default App;
