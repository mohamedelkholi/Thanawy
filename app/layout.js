import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata = {
  title: "thanawy",
  description:
    "An educational website for high school students that provides simplified lessons and resources to support their learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${cairo.className}  antialiased`}>
        <div className="  md:grid md:h-screen md:grid-rows-[8rem_1fr] md:grid-cols-[1fr_26rem]">
          <Header />
          <SideBar />
          <main>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
