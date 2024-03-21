import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const Cart = () => {
  const { all_products, cartItems, removeCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <section className="pt-28 pb-8">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 text-start py-12">
            <th className="px-1 py-2">Products</th>
            <th className="px-1 py-2">Title</th>
            <th className="px-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="px-1 py-2">Total</th>
            <th className="px-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  className="border-b border-slate-900/20 font-medium text-gray-600 p-6 text-center"
                  key={e.id}
                >
                  <td className="flex justify-center items-center">
                    <img
                      className="rounded-md ring-1 ring-slate-900/5 my-1"
                      src={e.image}
                      alt="product-image"
                      height={43}
                      width={43}
                    />
                  </td>
                  <td>
                    <div className="line-clamp-2">{e.name}</div>
                  </td>
                  <td className="w-16 h-16 bg-white">{e.new_price}</td>
                  <td>
                    <div>{cartItems[e.id]}</div>
                  </td>
                  <td>
                    <div>{e.new_price * cartItems[e.id]}</div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <TbTrash size={20} className="text-red-500 cursor-pointer scale-100 hover:scale-125 transition-all duration-300" onClick={() => removeCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {/* cartDetails */}
      <div className="flex items-center justify-center">

      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-gray-100 w-full max-w-[666px] items-center justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold">Summary</h1>
          <div>
            <div className="flex justify-between py-4">
              <h1>Subtotal:</h1>
              <h1>${getTotalCartAmount()}</h1>
            </div>
            <hr />
            <div className="flex justify-between py-4">
              <h1>Shipping Fee:</h1>
              <h4>Free</h4>
            </div>
            <hr />
            <div className="flex justify-between py-4">
              <h1>Total:</h1>
              <h1>${getTotalCartAmount()}</h1>
            </div>
          </div>
          <button className="btn-dark py-2">Checkout</button>
          {/* <div className="flex flex-col gap-10">
            <h1>Your coupon code enter here:</h1>
            <div className="flex justify-between pl-5 h-12 rounded-full ">
              <input type="text" placeholder="Coupon code"/>
              <button className="btn-dark ">Submit</button>
            </div>
          </div> */}
        </div>
      </div>
      </div>
    </section>
  );
};
export default Cart;
