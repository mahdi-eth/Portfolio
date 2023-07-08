import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "Mahdi Ettehadnejad"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-_black">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
