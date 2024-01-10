/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import HireMe from "../hiremebtn";
import ProgLangs from "../programmingLangs";

const Skills = () => {
    return (
        <section className="flex flex-wrap items-center justify-center px-4 mt-24 py-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 mb-6">
                <div className="mb-4">
                    <div className="inline bg-_gray text-_orange py-2 px-4 rounded-full">
                        MY SKILLS
                    </div>
                    <div className="text-white font-bold text-3xl mt-3">
                        What Are My Programming Skills?{" "}
                    </div>
                </div>
                <div className="flex">
                    <HireMe />
                </div>
                <div />
            </div>
            <ProgLangs />
        </section>
    );
};

export default Skills;
