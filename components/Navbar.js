"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const isItHome = path === "/";

  return (
    <div className={`${isItHome ? "absolute" : "static"} top-0 left-0 w-full z-10`}>
      <div className=" p-3 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between pt-5">
          {isItHome ? (
            <Link href="/" className="text-white">
              <div className="max-w-20">
                <img className="w-full" src="/logo/logo-white.png" alt="logo" />
              </div>
              {path === "/about" || path === "/gallery" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              ) : (
                ""
              )}
            </Link>
          ) : (
            <Link href="/" className="group text-black ">
              <div className="max-w-20">
                <img className="w-full" src="/logo/logo-black.png" alt="logo" />
              </div>
              {path === "/about" || path === "/gallery" ? (
                <svg
                  className="group-hover:-translate-x-1 transition-transform duration-300 size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              ) : (
                ""
              )}
            </Link>
          )}

          <ul className=" flex items-center gap-4 rounded-navbar px-12 py-2 pr-0">
            <li className="pr-4">
              <Link
                className={`text-navbar-text text-14  ${
                  path === "/gallery" ? "text-primary" : isItHome ? "text-white" : "text-black"
                } hover:text-primary transition-colors duration-300 `}
                href={"/gallery"}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`text-navbar-text text-14  ${
                  path === "/about" ? "text-primary" : isItHome ? "text-white" : "text-black"
                } hover:text-primary transition-colors duration-300 `}
                href={"/about"}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link className="text-navbar-text text-14 text-white" href={isItHome ? "#contact" : "/#contact"}>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
