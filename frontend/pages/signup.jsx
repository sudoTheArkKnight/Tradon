import React from "react";

const signup = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20  bg-black h-screen bgImg">
            <h1 className="text-white text-6xl vidaloka-regular ">TRADEON</h1>
            <div className="border-2 border-black  px-40 py-10 mt-10 rounded-lg text-white bg-[#1b213a]">
                <h2 className="text-4xl py-5">Sign Up to your account</h2>
                <form className="flex flex-col gap-2 text-2xl">
                    <span>Name</span>
                    <input
                        type="text"
                        className="border-white p-2 rounded-md border-2 bg-[#1b213a]"
                        placeholder="Enter your name"
                        name="name"
                    />
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
                    {/* {errMessage && <p className="text-red-500">{errMessage}</p>} */}
                    <button
                        type="submit"
                        className="px-5 py-3 mt-5 bg-blue-500 text-white rounded-md"
                    >
                        Sign Up
                    </button>
                    <p className="text-gray-400">
                        Already have an account? <t/>
                        <a href="/login" className="text-white">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default signup;
