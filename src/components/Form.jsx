import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Form(){

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);

  try {
    await emailjs.sendForm(
      "service_qwxnl4i",
      "template_sl5mojm",
      e.target,
      "j-tFMkWR2uST0edQr"
    );

    e.target.reset();
    toast.success("Message sent successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Error, try again!");
  } finally {
    setIsSending(false);
  }
};

    return(
        <form
         className="w-full max-w-lg py-6 rounded-lg"
         onSubmit={handleSubmit}
         >
                <div className="mb-4 flex gap-5">
                    <div className="flex-1">
                    <label className="block text-gray-700 text-xs tracking-wide font-semibold mb-2" htmlFor="name">
                        Full name
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </span>
                        <input
                            className="placeholder:text-[13px] appearance-none rounded border border-gray-200 w-full py-2 pl-10 pr-3 text-gray-700 text-xs font-outfit leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            required
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                        />
                    </div>
                    </div>

                    <div className="flex-1">
                     <label className="block text-gray-700 text-xs tracking-wide font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                            </svg>
                        </span>
                        <input
                            className="placeholder:text-[13px] appearance-none rounded border border-gray-200 text-xs font-outfit w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Your email address"
                        />
                    </div>
                     </div>

                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xs tracking-wide font-semibold mb-2" htmlFor="phone">
                        Phone (optional)
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone">
                                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                            </svg>
                        </span>
                        <input
                            className="placeholder:text-[13px] appearance-none rounded text-xs font-outfit border border-gray-200 w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="Your phone number"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xs tracking-wide font-semibold mb-2" htmlFor="reason">
                        Reason for message
                    </label>
                    <div className="relative">
                        <select name="reason" className="w-full border border-gray-200 py-2 px-3 pr-10 text-[13px] font-outfit text-gray-700 bg-white rounded-md appearance-none" id="reason" defaultValue="Select a reason">
                            <option className="text-xs" value="general">General inquiry</option>
                            <option className="text-xs" value="review">Review / Feedback</option>
                            <option className="text-xs" value="question">Order question</option>
                            <option className="text-xs" value="complaint">Complaint</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xs tracking-wide font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <div className="relative">
                        <span className="absolute top-3 left-0 flex items-start pl-3 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-icon lucide-pen">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                        </span>
                        <textarea
                            className="placeholder:text-[13px] appearance-none rounded text-xs font-outfit border border-gray-200 w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                            rows="4"
                            autoComplete="off"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>
                </div>
                <button className="bg-black w-full flex items-center justify-center gap-1 text-white font-light text-[13px] font-outfit py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSending}>
                    {isSending ? (
                        <>
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                    <path d="m21.854 2.147-10.94 10.939" />
                                </svg>
                            </span>
                        </>
                    )}
                </button>
            </form>
    )
}