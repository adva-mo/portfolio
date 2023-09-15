import Navbar from "../UI/Navbar";

export default function ContentLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
