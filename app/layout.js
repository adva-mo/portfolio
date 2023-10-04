import "./globals.css";
import { Delius_Unicase, Orbitron, Open_Sans } from "next/font/google";

export const delius = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Adva Mozes",
  description: "Professional portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
