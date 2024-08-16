import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Arash Payam",
  description: "Freelance video editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="mx-auto max-w-1216 px-6">
          <Navbar />
        </div>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
