const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-8 pt-32 pb-16 bg-gray-100">
        <div className="h-[600px] flex flex-col justify-center bg-white m-auto px-14 py-10 rounded-md">
            <h1 className="text-4xl md:text-5xl font-semibold text-center">Sign UP</h1>
            <div className="flex flex-col gap-4 mt-10">
                <input type="text" placeholder="Enter Your Name" className=" h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-md"/>
                <input type="emai" placeholder="Enter Your Email" className=" h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-md"/>
                <input type="password" placeholder="Enter Your Password" className=" h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-md"/>
            </div>
            <button className="btn-dark w-full my-5 py-2">Sign Up</button>
            <p className="font-bold">Already have an accout? <span className="text-blue-500 underline cursor-pointer">Login</span></p>
            <div className="flex justify-center items-center gap-3 mt-6">
                <input type="checkbox" />
                <p>By continuing, i agree to the terms of use and privacy policy.</p>
            </div>
        </div>
    </section>
  );
};
export default Login;
