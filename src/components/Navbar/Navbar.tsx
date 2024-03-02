"use client";
import React from "react";
import Link from "next/link";
import { navbarItems } from "@/shared/contants/data";
import Cart from "../Cart/Cart";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false);
  return (
    <div>
      <header className="bg-white relative">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img
                  src="https://www.codeswear.com/logo.png"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {navbarItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href={item.url}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* cart and wishlist */}
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <button
                    title="cart"
                    onClick={() => setToggleCart(!toggleCart)}
                  >
                    <IoCartSharp className="text-2xl text-pink-500" />
                  </button>
                  <button
                    title="cart"
                    onClick={() => setToggleCart(!toggleCart)}
                  >
                    <FaRegHeart className="text-xl text-pink-500" />
                  </button>
                </div>
              </div>
              {/* login and register */}
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/login"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-pink-600"
                      href="/register"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                {/* toggle button */}
                <div className="block md:hidden">
                  <button
                    title="toggle"
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => setToggleCart(!toggleCart)}>open</button>
        <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
      </header>
    </div>
  );
};

export default Navbar;
