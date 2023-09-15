import Link from "next/link";
import Navbar from "../UI/Navbar";

export default function ContentLayout({ children }) {
  return (
    <section className="flex flex-col justify-center items-center mt-14 gap-4 text-center">
      <Link href="/">ADVA MOZES</Link>
      <Navbar />
      {children}
    </section>
  );
}
