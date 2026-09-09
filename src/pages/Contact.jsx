import Form from "../components/Form";
import SEO from "../components/SEO";

export default function Contact(){
    return(
        <>
        <SEO
        title="Contact Us | Hairs for Her"
        description="Get in touch with Hairs for Her for enquiries, orders and more."
        />
        <section className="bg-white relative text-black flex flex-col items-center justify-center px-5 py-5 gap-5 lg:px-15">
            <div className="flex items-center gap-2">
               <h1 className="text-base font-montserrat tracking-wide font-semibold">CONTACT US</h1>
               <span className="w-8 h-px bg-[#db6b9a]"></span>
            </div>

            <div className="flex-1 flex-col flex w-full lg:flex-row">
                <div className="flex-1 w-full animate-heroFadeUp h-full py-5 lg:pr-10">
                    <div className="flex flex-col gap-2">
                        <span className="h-px w-10 bg-[#db6b9a]"></span>
                        <h1 className="text-2xl font-outfit">Send us a message</h1>
                        <p className="text-xs font-outfit text-gray-800 max-w-4/5">Have a question, idea or project in mind? Fill out the form and we'll get back to you as soon as possible</p>
                    </div>
                    <Form />
                </div>

                <div className="flex-1 flex flex-col gap-2 w-full h-full animate-heroImageReveal py-5 px-8 lg:pl-10">
                    <div className="flex flex-col gap-2">
                        <p className="font-montserrat text-xs text-[#db6b9a] font-semibold tracking-wider">GET IN TOUCH</p>
                        <h2 className="text-2xl font-outfit">We'd love to hear from you!</h2>
                        <span className="h-px w-10 bg-[#db6b9a]"></span>
                    </div>

                    <div className="flex flex-1 flex-col gap-1"> {/* Contact info container */}
                        <div className="flex-1 flex py-5 items-center gap-5 border-b border-b-gray-200"> {/* First contact Info Div */}
                            <div className="flex items-center justify-center shadow-md bg-[#fdf2f8] p-3 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                           </div>
                           <div className="flex flex-col gap-1">
                             <h2 className="text-gray-800 font-outfit text-sm font-semibold tracking-wide">Email</h2>
                             <p className="text-xs text-gray-600 font-outfit">info@hairsforher.com</p>
                             <p className="text-xs font-outift text-gray-500">We'll respond within 24 hours</p>
                           </div>
                        </div>
                        <div className="flex-1 flex py-5 items-center gap-5 border-b border-b-gray-200"> {/* Second contact Info Div */}
                            <div className="flex items-center justify-center shadow-md bg-[#fdf2f8] p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h2 className="text-gray-800 font-outfit text-sm font-semibold tracking-wide">Telephone</h2>
                              <p className="text-xs text-gray-600 font-outfit">+234 913 042 2775</p>
                              <p className="text-xs font-outift text-gray-500">Mon - Sat, 9:00 AM - 5:00 PM</p>
                            </div>
                            </div> 
                        <div className="flex-1 flex py-5 items-center gap-5">
                            <div className="flex items-center justify-center shadow-md bg-[#fdf2f8] p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h2 className="text-gray-800 font-outfit text-sm font-semibold tracking-wide">Location</h2>
                              <p className="text-xs text-gray-600 font-outfit">Port Harcourt, Rivers state</p>
                              <p className="text-xs font-outift text-gray-500">Nigeria</p>
                            </div>
                            </div> {/* third contact Info Div */}
                            <div className="flex-1 flex flex-col py-5 gap-5">
                               <h1 className="font-outift text-sm font-semibold">Connect with us</h1>
                        <div className="flex items-center space-x-6"> {/* Icons container */}
                            <div className="flex items-center justify-center shadow-md text-[13px] p-3 rounded-full text-white">
                               <a href="https://www.instagram.com/hairsforher" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram text-black"></i>
                                </a>
                            </div>
                            <div className="flex items-center justify-center shadow-md text-[13px] p-3 rounded-full text-white">
                            <a href="https://www.tiktok.com/@hairsforher" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-tiktok text-black"></i>
                            </a>
                            </div>
                            <div className="flex items-center justify-center shadow-md text-[13px] p-3 rounded-full text-white">
                            <a href="https://wa.me/2349130422775" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-whatsapp text-black"></i>
                            </a>
                            </div>
                        </div>
                        <p className="text-xs font-outift">Follow us for updates, news and inspiration</p>
                            </div> {/* Forth contact Info Div */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}