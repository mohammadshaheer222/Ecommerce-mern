import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
    return(
        <section className="bg-gray-100 xl:px-44">
            <div className="px-4 md:px-8 py-16">
                <h3 className="text-4xl md:text-6xl font-bold text-center mb-6">Popular Products</h3>
                <hr className="h-[3px] mx-auto md:w-1/2 bg-gradient-to-l from-transparent via-gray-500 to-transparent mb-16 text-center "/>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {POPULAR.map((item) => (
                        <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Popular;