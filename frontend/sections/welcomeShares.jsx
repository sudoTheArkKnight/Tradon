import React from "react";
import { useRouter } from "next/router";

export const WelcomeShares = () => {
    const router = useRouter();
    const { username } = router.query;

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-white font-bold text-5xl">
                Welcome {username}
            </h1>
        </div>
    );
};
