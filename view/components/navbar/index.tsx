<<<<<<< HEAD
"use client";
import Link from "next/link";
import HireMe from "../hiremebtn";
// import LanguageSwitcher from "../language";

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="hidden md:flex md:fixed md:top-0 w-full items-center z-10 justify-between p-4 bg-_black text-white">
                <div className="w-30 flex items-center text-white hover:text-_orange">
                    <Link href="/">
                        {/* <LanguageSwitcher /> */}
                        <span className="font-bold">Mahdi Ettehadnejad</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-4 md:gap-8 md:me-14">
                    <Link href="/">
                        <span className="text-white hover:text-_orange">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white hover:text-_orange">
                            About Me
                        </span>
                    </Link>
                    <Link href="/skills">
                        <span className="text-white hover:text-_orange">
                            Skills
                        </span>
                    </Link>
                    <Link href="/connect">
                        <span className="text-white hover:text-_orange">
                            Connect
                        </span>
                    </Link>
                </div>
                <HireMe />
            </div>
            <div className="flex md:hidden fixed top-0 w-full z-10 items-center justify-between p-4 bg-_black text-white">
                <div className="flex items-center bg-_black justify-around w-full px-2">
                    <Link href="/">
                        <span className="text-white hover:text-_orange">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white hover:text-_orange">
                            About Me
                        </span>
                    </Link>
                    <Link href="/skills">
                        <span className="text-white hover:text-_orange">
                            Skills
                        </span>
                    </Link>
                    <Link href="/connect">
                        <span className="text-white hover:text-_orange">
                            Connect
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
=======
"use client";
import Link from "next/link";
import HireMe from "../hiremebtn";
// import LanguageSwitcher from "../language";

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="hidden md:flex md:fixed md:top-0 w-full items-center z-10 justify-between p-4 bg-_black text-white">
                <div className="w-30 flex items-center text-white hover:text-_orange">
                    <Link href="/">
                        {/* <LanguageSwitcher /> */}
                        <span className="font-bold">Mahdi Ettehadnejad</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-4 md:gap-8 md:me-14">
                    <Link href="/">
                        <span className="text-white hover:text-_orange">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white hover:text-_orange">
                            About Me
                        </span>
                    </Link>
                    <Link href="/skills">
                        <span className="text-white hover:text-_orange">
                            Skills
                        </span>
                    </Link>
                    <Link href="/connect">
                        <span className="text-white hover:text-_orange">
                            Connect
                        </span>
                    </Link>
                </div>
                <HireMe />
            </div>
            <div className="flex md:hidden fixed top-0 w-full z-10 items-center justify-between p-4 bg-_black text-white">
                <div className="flex items-center bg-_black justify-around w-full px-2">
                    <Link href="/">
                        <span className="text-white hover:text-_orange">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-white hover:text-_orange">
                            About Me
                        </span>
                    </Link>
                    <Link href="/skills">
                        <span className="text-white hover:text-_orange">
                            Skills
                        </span>
                    </Link>
                    <Link href="/connect">
                        <span className="text-white hover:text-_orange">
                            Connect
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
>>>>>>> acd84104f6520be129ad489c21b8e81a233f6fdf
