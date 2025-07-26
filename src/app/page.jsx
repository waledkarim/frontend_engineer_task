import Header from "@_components/header";
import HeroSection from "@_components/herosection";
import { LanguageContextProvider } from "@_context/languagecontext";


export default function Home() {

  return (

      <>
        <LanguageContextProvider>

          <Header />
          <main className="">

            <HeroSection />

          </main>

        </LanguageContextProvider>

      </>

  );
}
