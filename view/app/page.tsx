import Header from "@/components/header";
import AboutMe from "@/components/aboutme";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

const Home: React.FC = () => {
    return (
        <div className="bg-_black">
            <Header />
            <hr className="border w-full border-_orange py-1/2" />
            <section className="px-12">
                <AboutMe />
                <Skills />
            </section>
            <Footer />
        </div>
    );
};

export default Home;
