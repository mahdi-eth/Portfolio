import React from "react";
import {
    FaTelegramPlane,
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <footer
            id="connect"
            className="text-white py-12 px-96 border-t border-_orange">
            <div className="flex justify-between">
                <div className="mb-6">
                    <p className="text-2xl font-bold text-white">
                        Connect with me:
                    </p>
                </div>
                <div className="flex justify-center mb-4">
                    <a
                        href="https://github.com/mahdi-eth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahdi-ettehadnejad-86a0b323a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/MahdiEttehad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCNRh48EhjVhivOCh38bCzWw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaYoutube size={24} />
                    </a>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-_orange">Hire me:</p>
                </div>
                <div className="text-center flex items-center justify-center mb-4">
                    <a
                        href="https://t.me/mahdi_eth7895"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <FaTelegramPlane size={24} />
                    </a>
                    <a
                        href="mailto:mahdi.ettehad85@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 mx-2 hover:text-_orange">
                        <GrMail size={24} />
                    </a>
                    <a
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
