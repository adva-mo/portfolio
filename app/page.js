import Navbar from "./UI/Navbar";

export default function Home() {
  return (
    <main className="homepage">
      <section className="grid p-20 h-full text-black">
        <h2 className="text-2xl">ADVA MOZES</h2>
        <h3 className="text-4xl">
          Hello! I'm Adva, a backend <br />
          developer from israel.
        </h3>
        <p>thank you for visit my page, check out my cool projects</p>
        <Navbar />
      </section>
    </main>
  );
}
