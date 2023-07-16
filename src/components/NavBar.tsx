import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="py-12 p-4 lg:px-52 xxl:96 flex flex-row justify-between items-center overflow-hidden z-40 bg-transparent navbar -translate-y-32">
      <div className="bg-transparent">
        <div className="h-12 w-12 lg:h-16 lg:w-16 rotate-45 bg-firstwhite rounded-xl flex items-center justify-center p-2 hover:rotate-0 transition-transform z-40 ">
          <Image
            className="-rotate-45 hover:rotate-0 transition-transform w-full h-full bg-transparent"
            src={"/new-logo.png"}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div
        className={`w-full h-full  flex flex-col justify-center bg-transparent `}
      >
        <div className="h-1 bg-gradient-to-r  from-firstwhite via-transparent   to-firstwhite bg-transparent"></div>
      </div>
      <div className="text-white md:hidden bg-transparent flex items-center justify-center">
        <Link
          className="bg-transparent rounded-full "
          target="_blank"
          href={"https://github.com/Niklas-dev"}
        >
          <Image
            className="bg-transparent"
            src={"./github-mark-white.svg"}
            alt="github"
            width={45}
            height={45}
          />
        </Link>
      </div>
      <div className="hidden md:flex flex-row items-center gap-6 z-40 bg-transparent m">
        <Link
          href={"#projects"}
          className="cursor-pointer text-xl  text-black   bg-firstwhite  rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-gray-400 transition-colors nav-item opacity-0 translate-x-32"
        >
          Projects
        </Link>
        <Link
          href={"#about"}
          className="cursor-pointer text-xl text-firstwhite   rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-black transition-colors bg-transparent nav-item opacity-0 translate-x-32"
        >
          About
        </Link>
        <Link
          href={"#contact"}
          className="cursor-pointer text-xl text-firstwhite border-firstwhite border-r-8 border-l-transparent border-l-8 hover:border-r-4 hover:border-l-4  rounded-full h-12 w-32 flex justify-center items-center font-bold hover:bg-black transition-all  bg-transparent nav-item opacity-0 translate-x-32"
        >
          Contact
        </Link>
        <Link
          className="bg-transparent p-2 hover:bg-black transition-colors rounded-full nav-item opacity-0 translate-x-32"
          target="_blank"
          href={"https://github.com/Niklas-dev"}
        >
          <Image
            className="bg-transparent"
            src={"./github-mark-white.svg"}
            alt="github"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </nav>
  );
}
