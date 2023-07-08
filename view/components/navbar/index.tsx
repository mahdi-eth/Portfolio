import Link from "next/link";
import HireMe from "../hiremebtn";

const Navbar: React.FC = () => {
    return (
        <nav className="flex fixed top-0 w-full items-center justify-between p-4 bg-_black text-white">
            <div className="w-30 flex items-center text-white hover:text-_orange">
                <Link href="/">
                    <span className="font-bold">Mahdi Ettehadnejad</span>
                </Link>
            </div>
            <div className="flex items-center gap-8 me-14">
                <Link href="/">
                    <span className="text-white hover:text-_orange">Home</span>
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
        </nav>
    );
};

export default Navbar;
