import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((item) => item.id  === Number(productId));
    if(!product) {
        return <div>Product Not Found</div>
    }
    return (
        <section className=" px-4 py-28 md:flex flex-col md:justify-center md:items-center xl:px-44">
            <div>
                <ProductHd product={product}/>
                <ProductDisplay product={product}/>
                <ProductDescription product={product}/>
                <RelatedProducts />
            </div>
        </section>
    )
}
export default Product;