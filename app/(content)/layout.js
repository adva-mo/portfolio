import Link from "next/link";
import Navbar from "../UI/Navbar";

export default function ContentLayout({ children }) {
  return (
    <section className="flex flex-col justify-center items-center mt-14 gap-4 text-center px-8">
      <Link href="/" className="text-black text-3xl">
        ADVA MOZES
      </Link>
      <Navbar />
      {children}
    </section>
  );
}
