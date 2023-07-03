import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/bounty-hunter.png"
            alt="app logo"
            width={50}
            height={50}
            className="object-contain bg-orange-400"
          />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
