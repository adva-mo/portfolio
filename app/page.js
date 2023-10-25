import Image from "next/image";
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
          Hello! I am Adva, a backend <br />
          developer from israel.
        </h3>
        <div className="flex gap-4 flex-col justify-center items-center text-center -translate-x-1/4">
          <span className={`font-bold ${orbitron.className}`}>
            Check out my work
          </span>
          <span className="animate-bounce">
            <Image
              src={`/arrow-down.png`}
              alt={"arrow"}
              width={20}
              height={20}
              priority={true}
            />
          </span>
          <Navbar />
        </div>
      </section>
    </main>
  );
}
