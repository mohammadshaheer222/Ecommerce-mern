import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import Item from "../components/Item";

const Category = ({ category, banner }) => {
  return (
    <section className="px-4 md:px-8 py-12 xl:py-26 ">
      <div>
        <div>
          <img src={banner} alt={category} className="block my-7 mx-auto" />
        </div>
        <div className="flex justify-between items-center my-8 mx-2 xl:px-44">
          <h1>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h1>
          <div className="flex items-center  gap-x-2 py-1 px-3 rounded-full bg-black text-white ">
            Sort <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        {/* container */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:px-44">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>
        <div className="text-center mt-16">
          <button className="btn-dark rounded-full px-3 py-1 sm:px-6 sm:py-2 ">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};
export default Category;
