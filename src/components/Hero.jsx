import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full">
      <div className="absolute top-28 md:top-36 px-4 sm:px-8">
        <div>
          <h1 className="text-4xl font-bold max-w-[32rem] lg:max-w-[42rem] md:text-5xl">Digital Shopping Hub Junction</h1>
          <p className="mt-6 max-w-[30rem] lg:max-w-[40rem] md:text-lg">
          Welcome to our digital shopping hub! Discover a wide array of products, from electronics to fashion and beyond. With our user-friendly interface, finding what you need has never been easier. Start browsing now and enjoy a seamless shopping experience.
          </p>
        </div>
        <div className="flex flex-col justify-start md:flex-row md:items-center gap-x-4 gap-y-2 my-10">
          <div className="flex gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="font-bold ">
            176k <span className="font-normal md:text-lg">Excellent Reviews</span>
          </div>
        </div>
        <div className="flex max-xs:flex-col gap-2">
          <NavLink className="btn-dark px-3 py-1 sm:px-6 sm:py-2">Shop Now</NavLink>
          <NavLink className="flex justify-center items-center gap-x-1 btn-dark px-3 py-1 sm:px-6 sm:py-2">
            <MdOutlineLocalOffer  className="text-lg"/>
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
