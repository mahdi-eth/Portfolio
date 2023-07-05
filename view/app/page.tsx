import Header from "@/components/header";
import AboutMe from "@/components/aboutme";

const Home: React.FC = () => {
    return (
        <div className="bg-_black">
            <Header />
            <hr className="border w-full border-_orange py-1/2" />
            <AboutMe />
        </div>
    );
};

export default Home;
