import Navbar from "./UI/Navbar";
import { delius, orbitron } from "./layout";
export default function Home() {
  return (
    <main className="homepage">
      <section className="grid p-20 h-full text-black">
        <h2 className={orbitron.className} style={{ fontSize: "2.5rem" }}>
          ADVA MOZES
        </h2>
        <h3 className={delius.className} style={{ fontSize: "2.5rem" }}>
          Hello! I'm Adva, a backend <br />
          developer from israel.
        </h3>
        <div className="flex gap-4 flex-col justify-center items-center text-center -translate-x-1/4">
          <span className="font-bold">Check out my work</span>
          <span className="animate-bounce font-bold">V</span>
          <Navbar />
        </div>
      </section>
    </main>
  );
}
