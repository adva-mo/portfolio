"use client";
import Image from "next/image";

export default function page() {
  return (
    <div class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg mt-10">
      <div class="flex flex-col justify-between relative w-[40vw]">
        <Image src="/contact-img.png" fill={true} className="rounded"></Image>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea class="w-full h-36 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
        </div>
        <div class="mt-8">
          <button class="uppercase text-sm font-bold tracking-wide bg-sand text-black p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
