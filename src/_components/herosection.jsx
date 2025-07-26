'use client';

import { Suspense } from "react";
import Carousel from "./carousel";
import { useLanguageContext } from "@_context/languagecontext";

export default function HeroSection(){

    const { lang } = useLanguageContext()

    return(
        <section className="min-h-[300px] md:min-h-[300px] bg-[url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)] bg-center bg-cover">

            <div className="wrapper mt-4 md:hidden">

                <Suspense fallback={<CarouselLoading />}>
                    <Carousel lang={lang}/>
                </Suspense>

                <h1 class="text-white mb-2 text-[21px] font-semibold md:text-4xl">IELTS Course by Munzereen Shahid</h1>

            </div>

        </section>
    );
}