"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navStyles =
    "bg-navbar bg-cover bg-center w-full nav-inset flex flex-col  items-center relative";
  const pathStyles =
    pathname === "/"
      ? navStyles + " pb-16 justify-start"
      : navStyles + " h-20 justify-center";
  const titleStyles =
    "text-3xl font-bold text-red-600 z-20 title-shadow font-bebas";
  const pathTitleStyles =
    pathname === "/" ? titleStyles + " md:text-5xl " : titleStyles;

  return (
    <nav className={pathStyles}>
      <div className="absolute w-full h-full bg-black opacity-80 z-0"></div>
      <div className="max-w-screen-2xl z-20 flex py-4 px-4 md:px-8 w-full items-center justify-between">
        <Link href="/" className={pathTitleStyles}>
          <h1>Splashflix</h1>
        </Link>
        {pathname !== "/views" ? (
          <Link
            href="/views"
            className="text-sm sm:text-lg font-semibold bg-red-600 pt-1 pb-2 px-3 rounded-md z-20"
          >
            View
          </Link>
        ) : null}
      </div>
      {pathname === "/" ? (
        <div className="z-20 max-w-screen-lg mx-auto text-center mt-40 md:mt-52 mb-8 md:mb-20 mx-12">
          <h2 className="z-20 text-3xl md:text-4xl lg:text-5xl font-bold">
            Want to be inspired? See something different? After a change of
            pace?
          </h2>
          <p className="mt-8 text-lg md:text-xl">
            Gaze upon some incredible pictures!
          </p>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
