import React from "react";

const Login = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20  bg-black h-screen main-bg">
            <h1 className="text-white text-6xl vidaloka-regular ">TRADEON</h1>
            <div className="border-2 border-black  px-32 py-10 mt-10 rounded-lg text-white bg-[#1b213a]">
                <h2 className="text-4xl py-5">Login to your account</h2>
                <form
                    action="/login_check"
                    method="post"
                    className="flex flex-col gap-2 text-2xl"
                >
                    <span>Email</span>
                    <input
                        type="text"
                        className="border-white p-2 rounded-md border-2 bg-[#1b213a]"
                        placeholder="email"
                        name="username"
                    />
                    <span>Password</span>
                    <input
                        type="password"
                        className="border-white p-2 rounded-md border-2 bg-[#1b213a] "
                        placeholder="password"
                        name="password"
                    />
                    <button className="px-5 py-3 mt-5 bg-blue-500 text-white rounded-md">
                        login
                    </button>
                    <p className="text-gray-400">
                        Not registered? <a href="#" className="text-white">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
