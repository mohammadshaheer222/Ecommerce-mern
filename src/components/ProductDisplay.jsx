import { useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { increment } = useContext(ShopContext);
  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* left side */}
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-[5px] sm:gap[6px] md:gap-[7px] flex-wrap">
            <img
              src={product_rt_1}
              alt="product-Image"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_2}
              alt="productImage"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_3}
              alt="productImage"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_4}
              alt="productImage"
              className="max-h-[99px]"
            />
          </div>
          <div>
            <img src={product.image} alt="product-Image" />
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col max-w-[380px]">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div className="flex items-center gap-x-2 text-orange-500 mt-2">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="text-black">(111)</p>
          </div>
          <div className="flex items-center gap-x-4 my-2">
            <div className="font-medium line-through text-sm">
              ${product.old_price}
            </div>
            <div className="font-bold">${product.new_price}</div>
          </div>
          <div className="mb-4">
            <h1 className="font-bold">Select Size:</h1>
            <div className="flex gap-4 my-3">
              <div className="ring-2 ring-slate-900 w-10 h-10 flex justify-center items-center cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                XL
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button
                onClick={() => {
                  increment(product.id);
                }}
                className="btn-dark bg-transparent text-black ring-1 ring-black py-2 tracking-widest hover:bg-black hover:text-white"
              >
                Add to cart
              </button>
              <button className="btn-dark py-2 tracking-widest">
                Buy it now
              </button>
            </div>
            <p className="">
              <span className="font-bold">Category :</span> Women | Jacket |
              Winter
            </p>
            <p>
              <span className="font-bold">Tags :</span> Modern | Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDisplay;
