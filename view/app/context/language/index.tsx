"use clinet";
import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState
} from "react";

interface LanguageContextValue {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}

const languageContext = createContext<LanguageContextValue>({
    language: "en",
    setLanguage: (): string => ""
});

export const useLanguage = () => useContext(languageContext);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<string>("fa");

    return (
        <languageContext.Provider value={{ language, setLanguage }}>
            {children}
        </languageContext.Provider>
    );
};
