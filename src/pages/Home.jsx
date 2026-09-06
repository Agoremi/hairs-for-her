import Hero from "../components/Hero";

export default function Home(){
    return(
       <section className="bg-white relative text-black flex flex-col items-center justify-center px-5 py-5 gap-5 overflow-hidden lg:px-15">
        <Hero />
        </section>
    )
}