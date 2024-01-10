/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgLangs = () => {
    const [langs, setLangs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/mahdi-eth/mahdi-eth/main/README.md"
                );
                const rawContent = response.data;

                const startIndex = rawContent.indexOf(
                    "## Programming Languages And Technologies I use 👇"
                );

                if (startIndex !== -1) {
                    const contentWithoutTitle =
                        rawContent.substring(startIndex);
                    const endIndex = contentWithoutTitle.indexOf(
                        "## Connect with me 🔭"
                    );
                    const content = contentWithoutTitle.substring(0, endIndex);

                    const regex = /<a\s+title=[^>]+>.*?<\/a>/g;
                    const matches = content.match(regex);
                    console.log("🚀 ~ fetchData ~ matches:", matches)

                    if (matches) {
                        setLangs(matches);
                    }
                } else {
                    console.error("Start title not found in raw content.");
                }
            } catch (error) {
                console.error(
                    "Error fetching programming languages data:",
                    error
                );
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full md:w-1/2 flex flex-wrap gap-2 items-center">
            {langs.map((lang, index) => (
                <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: lang }}
                    className="bg-_gray p-3 h-14 w-14 justify-center items-center"
                />
            ))}
        </div>
    );
};

export default ProgLangs;
