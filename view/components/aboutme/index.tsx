import React from "react";
import Image from "next/image";
import HireMe from "../hiremebtn";

const AboutMe = () => {
    return (
        <section
            id="aboutme"
            className="flex flex-wrap items-center justify-center p-4 mt-24">
            <div className="w-full md:w-1/2">
                <Image
                    src="/images/AboutMe.png"
                    alt="Picture"
                    width={580}
                    height={580}
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                <div className="mb-4">
                    <div className="inline bg-_gray text-_orange py-2 px-4 rounded-full">
                        WHO I AM
                    </div>
                    <div className="text-white font-bold text-3xl mt-3">
                        About Me
                    </div>
                </div>
                <div>
                    <p className="text-md text-white">
                        {`Hey! 👋 I'm Mahdi Ettehadnejad, a 17-year-old backend developer with a knack for crafting efficient and robust software solutions. 💻

🌐 Passionate about AI and ML, I'm on a mission to leverage technology for positive impact. My goal is to create cutting-edge AI solutions and contribute to the evolution of tech. 🛠️
 Whether working independently or as part of a team, I thrive on tackling
                        complex challenges and finding creative solutions. Let's
                        collaborate and shape the future together.`}
                    </p>
                </div>
                <div className="flex">
                    <HireMe />
                </div>
                <div />
            </div>
        </section>
    );
};

export default AboutMe;
