import Hero from "../components/Hero";
import SEO from "../components/SEO";

export default function Home(){
    return(
        <>
        <SEO
        title="Hairs for Her | Premium Hair & Beauty"
        description="Discover premium hair styles from Hairs for Her, including French curls, Italian curls and bone straight hair."
        />
        <section className="bg-white relative text-black flex flex-col items-center justify-center px-5 py-5 gap-5 overflow-hidden lg:px-15">
        <Hero />
        </section>
        </>
    )
}