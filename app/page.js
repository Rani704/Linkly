import Image from "next/image";
import { Poppins } from "next/font/local";
import Link from "next/link";

const poppins = Poppins({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   <main className="bg-purple-100">
   <section className="grid grid-cols-2 h-[50vh]">
    <div className="flex flex-col gap-4 items-center justify-center">
  <p className={`text-3xl font-bold ${poppins.variable} text-center`}>
    The best URL shortener in the market
    </p>
    <p className="px-56 text-center">
    We are the straight forward solution for your URL shortening needs.We provide a simple and efficient way to shorten your URLs, making them easier to share and manage. 
    </p>
      <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="https://github.com/Rani704"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
    </div>
    <div className="flex justify-start relative">
      <Image alt="Vector Image" src={"/vector.svg"} fill={true}></Image>
    </div>
   </section>
   </main>
  );
}
