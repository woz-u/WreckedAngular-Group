import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline";
import BeHerdLogo from "../Assets/BeHerdLogo.png";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import Advance from "../Assets/Advance.png";
import Premium from "../Assets/Premium.png";
import Revenge from "../Assets/Revenge.png";
import Checkout from "../Routes/Checkout";
import SignIn from "../Routes/SignIn";
import SignUp from "../Routes/SignUp";
import { useCart } from 'react-use-cart';

const currencies = ["USD", "CAD"];
const navigation = {
  categories: [
    {
      name: "Packages",
      featured: [
        {
          name: "Calf Pack",
          href: "/CalfPack",
          imageSrc:
            "https://cdn.discordapp.com/attachments/938922482432376843/984923525494231051/1.png",
          imageAlt: "Calf Package",
        },
        {
          name: "Cow Pack",
          href: "/CowPack",
          imageSrc:
            "https://cdn.discordapp.com/attachments/938922482432376843/984923525729108008/2.png",
          imageAlt: "Cow Pack",
        },
        {
          name: "Bull Pack",
          href: "/BullPack",
          imageSrc:
            "https://cdn.discordapp.com/attachments/938922482432376843/984923526001754232/3.png",
          imageAlt: "Bull Pack",
        },
        {
          name: "The Mad Cow Special",
          href: "/MadCow",
          imageSrc:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F938922482432376843%2F985937296954130432%2FRevenge.png",
          imageAlt: "MadCow",
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", href: "/AboutUs"},
    { name: "Reviews", href: "/Reviews" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { addItem } = useCart();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();


  const googleProvider = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="border-t-4 border-slate-600">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full shadow-xl pb-12 flex flex-col overflow-y-auto bg-slate-700">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-slate-300 bg-slate-700 hover:text-indigo-400 border-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only  ">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="py-1 pl-4 flex justify-center">
                  <div className="flow-root">
                    <a
                      href="/Home"
                      className="-m-2 p-2 block font-medium text-slate-300 hover:text-indigo-400"
                    >
                      Home Page
                    </a>
                  </div>
                  <div className="flow-root t"></div>
                  </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 py-6 space-y-12 bg-slate-700">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-40">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"/>
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block text-sm font-medium text-indigo-400">
                                <span
                                  className="absolute z-10 inset-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-gray-400 hover:text-slate-300">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className=" py-2 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-slate-300 hover:text-indigo-500">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="py-3 px-4 space-y-6">
                  <div className="flow-root">
                    <a
                      href="/SignUp"
                      className="-m-2 p-2 block font-medium text-slate-300 hover:text-indigo-500"
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root t">
                    {user?.email ? (
                      <div>
                        <Link to="/" className="p-4 text-white hover:text-slate-300">
                          Account
                        </Link>
                        <button onClick={handleSignOut}>Sign out</button>
                      </div>
                    ) : (
                      <div className="hidden md:block">
                        <Link
                          to="/signin"
                          className="p-4 text-white hover:text-slate-300"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/signup"
                          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:text-slate-300 text-white"
                        >
                          Create Account
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" border-slate-400 py-6 px-4 space-y-6">
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Navigation */}
      <header className="relative z-10 ">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900 border-b border-slate-300">
            <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="absolute right-0 inset-y-0 flex items-center">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-gray-300"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex items-center space-x-6">
                {user?.email ? (
                  <div>
                    <Link to="/account" className="text-sm font-medium text-white hover:text-gray-100 p-5">
                      Account
                    </Link>
                    <button className='text-sm font-medium text-white hover:text-gray-100' onClick={handleSignOut}>Sign out</button>
                  </div>
                ) : (
                  <div className="hidden md:block">
                    <Link to="/signin" className="text-sm font-medium text-white p-5 hover:text-slate-300">
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="text-sm font-medium text-white hover:text-slate-300"
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="backdrop-blur-md backdrop-filter bg-opacity-100 bg-slate-900 border-b-4 border-slate-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <a href="/Home">
                      <span className="sr-only">Workflow</span>
                      <img className="h-14 w-14" src={BeHerdLogo} alt="/" />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex md:flex items-center-[760px] sm:hidden">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? "bg-white" : "",
                                        "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-slate-800 border-t-4 border-slate-600">
                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item) => (
                                            <div
                                              key={item.name}
                                              className="group relative"
                                            >
                                              <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-60 text-white">
                                                <img
                                                  src={item.imageSrc}
                                                  logo
                                                  alt={item.imageAlt}
                                                  className="object-center object-cover"
                                                />
                                              </div>
                                              <a
                                                href={item.href}
                                                className="mt-4 block font-medium text-indigo-100"
                                              >
                                                <span
                                                  className="absolute z-10 inset-0"
                                                  aria-hidden="true"
                                                />
                                                {item.name}
                                              </a>
                                              <p
                                                aria-hidden="true"
                                                className="mt-1 text-indigo-300"
                                              >
                                                Get Details
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-white"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden md:hidden">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-white"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img src="BeHerdLogo.png" alt="" className="h-8 w-auto" />
                  </a>

                  <div className="flex-1 flex items-center justify-end">

                    <div className="flex items-center lg:ml-8">


                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a
                          href="/Checkout"
                          className="group -m-2 p-2 flex items-center"
                        >
                          <ShoppingBagIcon
                            className="flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-white">
                          <button className="">({totalUniqueItems})</button>
                          </span>
                          <span className="sr-only ">
                            items in cart, view bag
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
