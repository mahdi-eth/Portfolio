import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header
            id="header"
            className="flex mt-20 flex-col pt-20 pb-24 text-white items-center gap-4 justify-center p-4 cursor-default">
            <div className="text-2xl font-semibold text-center">
                <span className="hover:text-_orange">Hi,</span>
                <span className="hover:text-_orange">{` I'm`} </span>
                <span className="text-_orange hover:underline  transition-all delay-150">
                    Mahdi Ettehadnejad👋🏻
                </span>
            </div>
            <span className="hover:text-_orange"></span>
            <div className="text-4xl text-gray-600 text-center">
                <span className="inline-block hover:text-_orange pb-2 px-1">
                    ML{" "}
                </span>
                <span className="inline-block hover:text-_orange pb-2 px-1">
                    and{" "}
                </span>
                <span className="inline-block hover:text-_orange pb-2 px-1">
                    Web{" "}
                </span>
                <span className="inline-block hover:text-_orange pb-2 px-1">
                    Developer
                </span>
            </div>
            <div className="text-md text-gray-400 mt-2 text-center">
                <span className="hover:text-_orange">I </span>
                <span className="hover:text-_orange">create </span>
                <span className="hover:text-_orange">AI-powered </span>
                <span className="hover:text-_orange">applications </span>
                <span className="hover:text-_orange">and </span>
                <span className="hover:text-_orange">build </span>
                <span className="hover:text-_orange">fullstack </span>
                <span className="hover:text-_orange">web applications.</span>
            </div>
            <div className="mt-10">
                <div className="relative w-48 h-48 md:w-60 md:h-60">
                    <Image
                        src="/images/mahdi.jpg"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full border border-opacity-30 border-_orange hover:border-dashed transition-all delay-150"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
