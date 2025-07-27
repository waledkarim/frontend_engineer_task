import Carousel from "./carousel";

export default function HeroSection(){

    return(
        <section className="min-h-[300px] md:min-h-[300px] bg-[url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)] bg-center bg-cover">

            <div className="wrapper md:hidden">

                <Carousel />
                <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">IELTS Course by Munzereen Shahid</h1>

            </div>

        </section>
    );
}