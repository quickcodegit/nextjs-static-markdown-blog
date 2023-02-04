import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className=" text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href="/">
      <Image
        src="/logo.png"
        alt="QuickCodeLogo"
        width={40}
        height={40}
        className="mx-auto"
      />
        {" "}
        <h1 className="text-2xl text-white font-bold mt-4"> Quick Code Blog</h1>
      </Link>
      <p className=" text-slate-300"> 🤞 Welcome to my code blog. 💻</p>
      <br />
    </header>
  );

  const footer = (
    <footer className="border-t border-slate-500 mt-12 py-6 text-center text-slate-400">
      <br />
      <h4>Designed by QuickCode :) with ❤ .</h4>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
