import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-col bg-_black text-white items-center gap-4 justify-center p-4 cursor-default">
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
                <span className="hover:text-_orange">responsive </span>
                <span className="hover:text-_orange">websites.</span>
            </div>
            <Image
                src="/images/mahdi.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="rounded-full mt-4 border border-opacity-50 border-_orange"
            />
        </header>
    );
};

export default Header;
