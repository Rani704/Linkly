import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-100 to-purple-200 min-h-screen">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20 px-6">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <h1
            className={`text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight ${poppins.className}`}
          >
            The best URL shortener <br /> in the market
          </h1>

          <p className="text-lg text-gray-700 max-w-lg">
            Simplify your links, share smarter, and manage everything in one
            place. Fast, reliable, and built for modern users.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/Rani704/Linkly">
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          <Image
            alt="Vector Image"
            src="/vector.svg"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </section>
  
    </main>
  );
}
