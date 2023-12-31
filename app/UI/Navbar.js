import Link from "next/link";
import { delius } from "../layout.js";

export default function Navbar() {
  return (
    <div
      className={`flex gap-6 text-red text-base font-bold ${delius.className}`}
    >
      <Link href="/backend" className="hover:text-dred ">
        Backend apps
      </Link>
      <Link href="/e2e" className="hover:text-dred ">
        E2E apps{" "}
      </Link>
      <Link href="/contact" className="hover:text-dred ">
        contact me
      </Link>
    </div>
  );
}
