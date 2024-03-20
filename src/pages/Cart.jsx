import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const Cart = () => {
  const { all_products, cartItems, removeCart } =
    useContext(ShopContext);
  return (
    <section className="pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  className="border-b border-slate-900/20 p-6 text-center"
                  key={e.id}
                >
                  <td className="flex justify-center items-center">
                    <img
                      className="rounded-md ring-1 ring-slate-900/5 my-1"
                      src={e.image}
                      alt=""
                      height={43}
                      width={43}
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{e.name}</div>
                  </td>
                  <td className="w-16 h-16 bg-white">{e.new_price}</td>
                  <td>
                    <div>{cartItems[e.id]}</div>
                  </td>
                  <td>
                    <div>{e.new_price * cartItems[e.id]}</div>
                  </td>
                  <td>
                    <div className="pl-14">
                      <TbTrash onClick={() => removeCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </section>
  );
};
export default Cart;
