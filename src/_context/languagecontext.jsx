'use client';

import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {

    const [lang, setLang] = useState(() => {

        if(!sessionStorage.getItem('lang')){
            sessionStorage.setItem('lang', 'en')
            return "en";
        }else{
            return sessionStorage.getItem('lang');
        }

    });

    return(
        <LanguageContext.Provider value={{
            lang,
            setLang: (lang) => {
                setLang(lang);
                sessionStorage.setItem("lang", lang);
            }
        }}>
            {
                children
            }
        </LanguageContext.Provider>
    )

}

export function useLanguageContext(){
    const context = useContext(LanguageContext);
    return context;
}