import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <div className="navbar bg-base-100">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/bounty-hunter.png"
            alt="app logo"
            width={55}
            height={55}
            className="object-contain bg-orange-400 rounded-full"
          />
        </Link>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Lil Bounty Hunters
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Sign Up!</a>
            </li>
            <li>
              <details>
                <summary>Login</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Maker</a>
                  </li>
                  <li>
                    <a>Hunter</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
