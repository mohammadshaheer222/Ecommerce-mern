import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flex justify-center items-center overflow-hidden group transition-all duration-100">
        <Link to={`/product/${id}`} className="w-12 h-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 z-20 scale-0 group-hover:scale-100 transition-all duration-700"><FaSearch className="scale-125 hover:rotate-90 transition-all duration-200"/></Link>
        <img onClick={window.scroll(0, 0)} src={image} alt="productImage" className="w-full block object-cover group-hover:scale-110 transition-all duration-1000" />
      </div>
      <div className="p-4 overflow-hidden">
        <h1 className="my-4 font-medium line-clamp-2 text-gray-700">{name}</h1>
        <div className="flex gap-2 items-center">
            <p className="font-medium line-through text-sm">${old_price}</p>
            <p className="font-bold">${new_price}.00</p>
        </div>
      </div>
    </div>
  );
};
export default Item;
