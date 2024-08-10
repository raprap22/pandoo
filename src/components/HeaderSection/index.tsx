import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { URL_PATH } from "@/utils/constants/path.constant";
import { Icon } from "@iconify/react/dist/iconify.js";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-20 p-4 fixed w-full bg-white md:bg-transparent">
      <div className="container mx-auto flex justify-between items-center font-bold h-[60px] max-w-[1250px]">
        <Image
          src={URL_PATH.IMAGE.LOGO_IMAGE_COLOR}
          alt="Zamrood Logo"
          width={150}
          height={50}
          className="w-auto h-auto md:hidden"
        />
        <Image
          src={URL_PATH.IMAGE.LOGO_IMAGE}
          alt="Zamrood Logo Desktop"
          width={150}
          height={50}
          className="w-auto h-auto hidden md:block"
        />
        <nav className="hidden md:flex flex-row">
          <Link
            className="text-white hover:pb-2 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:border-b-2 border-white p-4"
            href="/"
          >
            Homepage
          </Link>
          <Link
            className="text-white hover:pb-2 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:border-b-2 border-white p-4"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-white hover:pb-2 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:border-b-2 border-white p-4"
            href="#destinations"
          >
            Destinations
          </Link>
          <Link
            className="text-white hover:pb-2 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:border-b-2 border-white p-4"
            href="#articles"
          >
            Articles
          </Link>
        </nav>
        <Link
          href="#contact"
          className="hidden md:inline-block text-white px-6 py-3 rounded-full border-2 font-semibold hover:bg-secondary hover:border-secondary transition-all"
        >
          Need Assistance?
        </Link>
        <div className="md:hidden flex items-center">
          <Icon
            icon="circum:menu-burger"
            onClick={toggleMenu}
            width={40}
            className="text-primary focus:outline-none cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4 mt-8">
          <Icon
            icon="solar:close-circle-outline"
            width={40}
            className="text-primary focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <nav className="flex flex-col items-end p-8 mt-40">
          <Link
            className="block text-primary text-lg py-10 w-full text-right"
            href="/"
            onClick={toggleMenu}
          >
            Homepage
          </Link>
          <Link
            className="block text-primary text-lg py-10 w-full text-right"
            href="#experience"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            className="block text-primary text-lg py-10 w-full text-right"
            href="#destinations"
            onClick={toggleMenu}
          >
            Destinations
          </Link>
          <Link
            className="block text-primary text-lg py-10 w-full text-right"
            href="#articles"
            onClick={toggleMenu}
          >
            Articles
          </Link>
          <Link
            href="#contact"
            className="block text-primary text-lg my-10 text-right px-6 py-3 rounded-full border-2 border-primary font-semibold hover:bg-secondary hover:border-secondary transition-all"
            onClick={toggleMenu}
          >
            Need Assistance?
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
