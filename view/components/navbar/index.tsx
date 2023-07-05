import Link from "next/link";
import HireMe from "../hiremebtn";

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-_black text-white">
            <div className="w-30 flex items-center text-white hover:text-_orange">
                <Link href="/">
                    {/* <div className="w-8 h-8">
                        <Image
                            src="/images/logo2.png"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    </div> */}
                    <span className="font-bold">Mahdi Ettehadnejad</span>
                </Link>
            </div>
            <div className="flex items-center gap-8 me-20">
                <Link href="/">
                    <span className="text-white hover:text-_orange">Home</span>
                </Link>
                <Link href="/about">
                    <span className="text-white hover:text-_orange">
                        About Me
                    </span>
                </Link>
                <Link href="/connect">
                    <span className="text-white hover:text-_orange">
                        Connect with Me
                    </span>
                </Link>
            </div>
            <HireMe />
        </nav>
    );
};

export default Navbar;
