import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-6 text-red uppercase text-base font-bold">
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
