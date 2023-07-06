import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-col pt-20 pb-24 text-white items-center gap-4 justify-center p-4 cursor-default">
            <div className="text-2xl font-semibold">
                <span className="hover:text-_orange">Hi,</span>
                <span className="hover:text-_orange">{` I'm`} </span>
                <span className="text-_orange hover:underline  transition-all delay-150">
                    Mahdi Ettehadnejad
                </span>
                👋🏻
            </div>
            <span className="hover:text-_orange"></span>
            <div className="text-4xl text-gray-600">
                <span className="hover:text-_orange">AI </span>
                <span className="hover:text-_orange">Engineer </span>
                <span className="hover:text-_orange">and </span>
                <span className="hover:text-_orange">Web </span>
                <span className="hover:text-_orange">Developer</span>
            </div>
            <div className="text-md text-gray-400 mt-2">
                <span className="hover:text-_orange">I </span>
                <span className="hover:text-_orange">create </span>
                <span className="hover:text-_orange">AI-powered </span>
                <span className="hover:text-_orange">applications </span>
                <span className="hover:text-_orange">and </span>
                <span className="hover:text-_orange">build </span>
                <span className="hover:text-_orange">fullstack </span>
                <span className="hover:text-_orange">websites.</span>
            </div>
            <Image
                src="/images/mahdi.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full mt-10 border border-opacity-30 border-_orange hover:border-dashed transition-all delay-150"
            />
        </header>
    );
};

export default Header;
