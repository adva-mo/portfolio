import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex">
      <Link href="/backend">Backend </Link>
      <Link href="/e2e">e2e </Link>
      <Link href="/about">about </Link>
    </div>
  );
}
