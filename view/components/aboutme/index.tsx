import React from "react";
import Image from "next/image";
import HireMe from "../hiremebtn";

const AboutMe = () => {
    return (
        <section id="aboutme" className="flex flex-wrap items-center justify-center p-4 mt-24">
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
                        {`Hi, I'm Mahdi Ettehadnejad, an AI engineer and problem
                        solver. With a strong background in machine learning,
                        programming, and the MERN stack, I am passionate about
                        leveraging the power of AI to create innovative
                        solutions. I have a deep love for learning and a keen
                        interest in philosophy, science, and engineering.
                        Curiosity, determination, and a strong work ethic drive
                        me to continuously seek knowledge and push the
                        boundaries of what is possible. Whether working
                        independently or as part of a team, I thrive on tackling
                        complex challenges and finding creative solutions. Let's
                        collaborate and shape the future of AI together.`}
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
