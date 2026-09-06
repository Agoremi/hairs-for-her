import aboutImage from '../assets/about.png'

export default function About() {
    return (
    
        <div className="flex-col flex px-6.5 py-5 items-center w-full gap-10 lg:flex-row lg:px-15">
            <div className="flex-1 font-outfit w-full flex flex-col items-center justify-center h-full"> {/*First info div start*/}
                <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center"> {/*title div*/}
                  <span className="h-px w-5 bg-black lg:w-7"></span>
                  <p className="text-xs font-montserrat tracking-widest font-semibold">ABOUT US</p>
                  <span className="h-px w-5 bg-black lg:w-7"></span>
                </div>
                <h1 className="text-[27px] font-playfair tracking-wide lg:text-4xl">We're here to help<br></br>you feel your best.</h1>
                <span className="h-px w-7 bg-[#db6b9a]"></span>
                <p className="text-sm text-gray-900 max-w-66 lg:max-w-md">Hairs for Her was born from a passion for beauty, confidence, and self-expression. We offer premium hair extensions made to blend seamlessly, last longer, and help you feel your best every day.</p>
                <div className="flex flex-col gap-3 py-5 mt-3 border-t border-gray-200 items-start">
                    <div className="flex gap-3 items-start w-full">
                        <i class="fa-solid text-[#db6b9a] text-2xl shrink-0 fa-quote-left"></i>
                        <p className="font-cormorant text-lg italic flex-1">Our mission is simple: to provide high-quality hair that empowers women to look beautiful and feel unstoppable</p>
                    </div>
                </div>
                </div>
            </div> 
            <div className="flex-1 font-outfit w-full flex flex-col items-center justify-center h-full"> {/*Second info div start*/}
                <img src={aboutImage} alt="About" className="w-full rounded object-cover" />
            </div> 
        </div>
    )
}   