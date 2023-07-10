import { useLanguage } from "@/app/context/language";
import React, { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageSwitch = () => {
        if (language === "en") {
            setLanguage("fa");
        } else {
            setLanguage("en");
        }
    };

    return (
        <div
            onClick={handleLanguageSwitch}
            className="flex items-center rounded-full px-4 py-2 bg-white bg-opacity-90">
            <button className="text-_black font-semibold rounded transition-colors duration-300 ease-in-out">
                <HiOutlineSwitchHorizontal />
            </button>
            <p className="pl-2 text-_black text-sm">
                {language === "en" ? "محتوای فارسی" : "English Content"}
            </p>
        </div>
    );
};

export default LanguageSwitcher;
