import Link from "next/link";
import Navbar from "../UI/Navbar";
import { delius, orbitron } from "../layout";

export default function ContentLayout({ children }) {
  return (
    <section className="flex flex-col justify-center items-center mt-14 pb-8 gap-4 text-center px-8">
      <Link href="/" className="text-black text-3xl">
        <span className={orbitron.className}>ADVA MOZES</span>
      </Link>
      <Navbar />
      {children}
    </section>
  );
}
