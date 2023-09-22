import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-6 text-gray-600/50 uppercase text-xs">
      <Link href="/backend">Backend </Link>
      <Link href="/e2e">e2e </Link>
      <Link href="/about">about </Link>
      <Link href="/contact">contact me</Link>
    </div>
  );
}
