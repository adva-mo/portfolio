"use client";
import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Page() {
  const form = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      //todo: provide better feedback
      alert(result.text);
    } catch (e) {
      alert(error.text);
    }
  };

  return (
    <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg mt-10">
      <div className="flex flex-col justify-between relative w-[40vw]">
        <Image
          src="/contact-img.png"
          fill={true}
          sizes="40vw"
          className="rounded"
          priority={true}
        ></Image>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
            name="from_name"
            required
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Email
          </span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="from_email"
            required
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Message
          </span>
          <textarea
            className="w-full h-36 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"
            name="message"
            required
          ></textarea>
        </div>
        <div className="mt-8">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-sand text-black p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
