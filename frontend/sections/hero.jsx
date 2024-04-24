import React from "react";

export const HeroSection = () => {
    return (
        <section className="h-screen bgImg">
            <div className="container mx-auto flex h-screen justify-around items-center">
                <div>
                    <h1 className="text-white text-7xl vidaloka-regular">
                        TRADEON
                    </h1>
                </div>
                <div>
                    <div className="flex flex-col gap-5 justify-center items-center py-28 text-white rounded-2xl px-40 blue-bg">
                        <h1 className="mb-10 text-4xl">Welcome!</h1>
                        <a
                            href="/login"
                            className="py-4 w-80 bg-blue-600  text-center hover:bg-blue-300 hover:text-black transition-all duration-200 rounded-xl"
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className="py-4 w-80 bg-blue-600 text-center hover:bg-blue-300 hover:text-black transition-all duration-200 rounded-xl"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
