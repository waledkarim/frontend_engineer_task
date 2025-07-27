'use client';

import { useEffect, useState } from "react";

export default function Carousel(){

    const [media, setMedia] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            try {
                const res = await fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course");
                const { data: { media }} = await res.json();
                setMedia(media);
                console.log(media);
                
            } catch (error) {
                console.error(error);
            }
        }

        fetch();

    }, []);

    return(
        <div className="flex flex-col">
            <div></div>
            <div></div>
        </div>
    );
}