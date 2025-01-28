import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/grizzlybg.svg"
          alt="Arka plan"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      <div className="min-h-screen grid grid-rows-12">

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center row-span-11 p-8 gap-8">
        <div className="w-full sm:w-1/2 flex justify-end">
          <Image
            src="/mascot.svg"
            alt="Grizzly Jam Maskotu"
            width={500}
            height={500}
            className="object-contain fade-in-left pointer-events-none"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-8 color-[#ffffcc]">
          <div className="flex justify-center w-full -ml-20">
            <Image
              src="/grizzlyJam.svg"
              alt="Grizzly Jam"
              width={600}
              height={100}
              className="object-cover h-[310px] pointer-events-none"
            />
          </div>

          <div className="text-4xl tracking-widest font-bold text-center w-full montserrat text-[#ffffcc] flex justify-center">
            Ç
            <p className="bounce-1">o</p>
            <p className="bounce-2">o</p>
            <p className="bounce-3">o</p>
            <p className="bounce-4">o</p>
            k Yakında
          </div>

          <div className="flex gap-6 justify-center w-full">
            <Link
              href="https://instagram.com/iyte_yazilim" // Instagram adresinizi buraya ekleyin
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/showcase/grizzly-jam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
      <footer className="relative z-10 text-[#ffffcc] text-sm text-center py-4 mt-auto">
        © 2025 İYTE Yazılım Topluluğu - Tüm Hakları Saklıdır
      </footer>
      </div>


    </main>
  );
}
