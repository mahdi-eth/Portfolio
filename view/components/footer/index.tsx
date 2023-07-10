import React from "react";
import {
    FaTelegramPlane,
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp,
    FaMedium
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="text-white py-12 sm:px-32 md:px-48 border-t border-_orange">
            <div className="container mx-auto md:flex md:justify-between md:items-center">
                <div className="mb-6 text-center md:mb-0 md:text-left">
                    <p className="text-2xl font-bold text-white">
                        Connect with me:
                    </p>
                </div>
                <div className="flex justify-center mb-4 md:justify-end">
                    <a
                        title="Github"
                        href="https://github.com/mahdi-eth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaGithub size={24} />
                    </a>
                    <a
                        title="Linkedin"
                        href="https://www.linkedin.com/in/mahdi-ettehadnejad-86a0b323a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        title="Twitter"
                        href="https://twitter.com/MahdiEttehad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaTwitter size={24} />
                    </a>
                    <a
                        title="Youtube"
                        href="https://www.youtube.com/channel/UCNRh48EhjVhivOCh38bCzWw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaYoutube size={24} />
                    </a>
                    <a
                        title="Medium"
                        href="https://medium.com/@mahdi.ettehad85"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaMedium size={24} />
                    </a>
                </div>
            </div>
            <div className="container mx-auto md:flex md:justify-between md:items-center">
                <div className="text-center mb-6 md:mb-0">
                    <p className="text-2xl font-bold text-_orange">Hire me:</p>
                </div>
                <div className="flex justify-center mb-4 md:justify-end">
                    <a
                        title="Telegram"
                        href="https://t.me/mahdi_eth7895"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaTelegramPlane size={24} />
                    </a>
                    <a
                        title="Gmail"
                        href="mailto:mahdi.ettehad85@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <GrMail size={24} />
                    </a>
                    <a
                        title="Whatsapp"
                        href="https://wa.me/989908882389"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
