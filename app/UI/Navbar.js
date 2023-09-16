import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex gap-3 ">
      <Link href="/content/backend">Backend </Link>
      <Link href="/content/e2e">e2e </Link>
      <Link href="/content/about">about </Link>
    </div>
  );
}
