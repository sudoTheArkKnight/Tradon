import React, { useEffect, useState } from "react";
import { backendAddress } from "@/server-config";
import { useRouter } from "next/router";
// import {cookies} from "next/headers";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const router = useRouter();

    // useEffect(() => {
    //     // Check the session cookie
    //     const sessionCookie = cookies().get("session").value
    //     if(sessionCookie !== undefined && sessionCookie !== ""){
    //         router.push("/welcome")
    //     }
    // }, []);

    function handleLogin(e) {
        e.preventDefault();
        fetch(`${backendAddress}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Inside handleLogin function after successful login
                if (data.status === "success") {
                    setErrMessage("");
                    router.push({
                        pathname: "/welcome",
                        query: { username }, // Pass username as a query parameter
                    });
                } else {
                    setErrMessage("Login failed. Please try again");
                }
            });
    }

    return (
        <div className="flex justify-center items-center flex-col py-20  bg-black h-screen bgImg">
            <h1 className="text-white text-6xl vidaloka-regular ">TRADEON</h1>
            <div className="border-2 border-black  px-32 py-10 mt-10 rounded-lg text-white bg-[#1b213a]">
                <h2 className="text-4xl py-5">Login to your account</h2>
                <form
                    onSubmit={(e) => handleLogin(e)}
                    className="flex flex-col gap-2 text-2xl"
                >
                    <span>Email</span>
                    <input
                        type="text"
                        className="border-white p-2 rounded-md border-2 bg-[#1b213a]"
                        placeholder="email"
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                    />
                    <span>Password</span>
                    <input
                        type="password"
                        className="border-white p-2 rounded-md border-2 bg-[#1b213a] "
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                    {errMessage && <p className="text-red-500">{errMessage}</p>}
                    <button
                        type="submit"
                        className="px-5 py-3 mt-5 bg-blue-500 text-white rounded-md"
                    >
                        login
                    </button>
                    <p className="text-gray-400">
                        Not registered?{" "}
                        <a href="#" className="text-white">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
