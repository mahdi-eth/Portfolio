import Link from "next/link";

const HireMe: React.FC = () => {
    return (
        <Link
            href="/connect"
            className="w-30 min-w-max py-2 text-_black font-semibold hover:opacity-90 bg-_orange px-8 rounded-full">
            Hire Me
        </Link>
    );
};

export default HireMe;
