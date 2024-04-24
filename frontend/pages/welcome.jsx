import React from "react";
import { useRouter } from "next/router";
import { WelcomeShares } from "@/sections/welcomeShares";
const welcome = () => {
    const router = useRouter();
    const { username } = router.query;
    return (
        <section className="bgImg h-screen pt-5">
            <nav className="flex justify-between container mx-auto">
                <div className="flex items-center gap-3">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGL4WV2ZosxOeCslHNwjbvxq-vRqfKnw00J0qiYbyWg&s"
                        alt="user logo"
                        className="w-16 h-16 rounded-full"
                    />
                    <span className="text-white font-bold">
                        {username}
                    </span>
                    {/* <Image src="/pngtree-vector-users-icon-png-image_3997401.jpg" height={50} width={50}/> */}
                </div>
                <div>
                    <ul className="flex gap-3 text-white font-bold">
                        <li>
                            <a href="/">logout</a>
                        </li>{" "}
                        <li>
                            <a href="">About</a>
                        </li>{" "}
                        <li>
                            <a href="">Contact</a>
                        </li>{" "}
                        <li>
                            <a href="">News</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <WelcomeShares />
        </section>
    );
};

export default welcome;
