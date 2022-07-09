import React from "react";
import BeHerd from "../Assets/BeHerdBackground.png";
import { Link } from "react-router-dom";
import FeaturedYard1 from "../Assets/FeaturedYard1.jpg";
import FeaturedYard2 from "../Assets/FeaturedYard2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="bg-slate-800">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden border-b-4 border-double border-white">
          <img
            src={BeHerd}
            alt="/"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-0 "
        />

        <div className="background:inherit background-clip:text color:transparent filter:invert[1] relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Be Herd
          </h1>
          <h2 className="mt-4 text-4xl text-white font-bold">
            The latest way to celebrate a birthday, anniversary, or any other
            special occasion in the most hilarious way.
          </h2>
          <a
            href="/CalfPack"
            className="border border-slate-300 mt-8 inline-block bg-transparent  border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-white hover:text-black"
          >
            See where our packages begin!
          </a>
        </div>
      </div>
      {/* Featured section - Yard1 - */}
      <section
        aria-labelledby="social-impact-heading"
        className="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8 bg-slate-800"
      >
        <div className="relative rounded-lg overflow-hidden border-4 border-double border-white">
          <div className="absolute inset-0">
            <img
              src={FeaturedYard1}
              alt="/"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-90 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">Learn More </span>
                <span className="block sm:inline">About Us!</span>
              </h2>
              <p className="mt-3 text-xl text-white text-bold">
                Whether you're trying to celebrate someones special day or prank
                your neighbor we have the perfect package for you. If you got
                Herd'ed, check out our Revenge Special! To find out more about what Be Herd is click the button below.
              </p>
              <a
                href="/AboutUs"
                className="mt-8 inline-block bg-transparent  border border-slate-300 rounded-md py-3 px-8 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                About Be Herd
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Featured section - Yard2 -  */}
      <section
        aria-labelledby="social-impact-heading"
        className="max-w-12xl mx-auto pt-24 sm:pt-32 sm:pb-4 sm:px-6 bg-slate-800"
      >
        <div className="relative rounded-lg overflow-hidden border-4 border-double border-white">
          <div className="absolute inset-0">
            <img
              src={FeaturedYard2}
              alt="/"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-70 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl"
              >
                <span className="block sm:inline">Share Your </span>
                <span className="block sm:inline">Experience!</span>
              </h2>
              <p className="mt-3 text-2xl text-white">
                Make sure to share your Be Herd experience with us on our
                socials!
              </p>
              <div className='flex flex-row max-w-[1240px] py-4 mx-auto justify-between sm:flex-row text-center text-white'>
                <div className="px-8 text-4xl">
                <a href="https://www.facebook.com/profile.php?id=100082685704890" className="inline-block bg-transparent  border-transparent rounded-md px-5 text-white hover:bg-indigo-600 hover:text-black"><FaFacebook /></a>
                </div>
                <div className="px-8 text-4xl">
                <a href="https://www.instagram.com/be_herd_manager/" className="inline-block bg-transparent  border-transparent rounded-md px-5 text-white hover:bg-indigo-600 hover:text-black"><FaInstagram /></a>
                </div>
                <div className="px-8 text-4xl">
                <a href="https://twitter.com/ManagerHerd" className="inline-block bg-transparent  border-transparent rounded-md px-5 text-white hover:bg-indigo-600 hover:text-black"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
