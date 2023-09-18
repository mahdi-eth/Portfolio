import Link from "next/link";

const HireMe: React.FC = () => {
    return (
        <Link
            href="/connect"
            className="min-w-max py-2 text-_black font-semibold hover:opacity-90 bg-_orange px-4 rounded-full">
            Let&apos;s collaborate
        </Link>
    );
};

export default HireMe;
