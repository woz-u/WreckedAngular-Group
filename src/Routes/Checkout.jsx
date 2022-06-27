import React, {useState} from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import data from "./data";
import Showandhide from "../Components/Showandhide";

const products = [
  {
    id: 1,
    name: "Calf Package",
    image: "https://cdn.discordapp.com/attachments/938922482432376843/984923525494231051/1.png",
    price: "$60.00"
},
{
    id: 2,
    name: "Cow Package",
    image: "https://cdn.discordapp.com/attachments/938922482432376843/984923525729108008/2.png",
    price: "$80.00"
},
{
    id: 3,
    name: "Bull Package",
    image: "https://cdn.discordapp.com/attachments/938922482432376843/984923526001754232/3.png",
    price: "$100.00"
},
{
    id: 4,
    name: "Mad Cow Package",
    image: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F938922482432376843%2F985937296954130432%2FRevenge.png",
    price: "$50.00"
}
]; // More products...

const Checkout = () => {
  function Showdelivery(props){
    const difaddress = () =>{
      
    }
  }
  return (
    <div className="bg-gray-900">
      {/* Background color split screen for large screens */}
      <div
        className="hidden lg:block fixed top-0 left-0 w-1/2 bg-gray-900"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block fixed top-0 right-0 w-1/2 bg-gray-700"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2 bg-gray-700"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-white">
              Order summary
            </h2>

            <ul
              role="list"
              className="text-sm font-medium text-white divide-y divide-gray-50 "
            >
              {products.map((product) => (
                <li
                  key="{product.id}"
                  className="flex items-start py-6 space-x-4"
                >
                  <img
                    src="{product.imageSrc}"
                    alt="{product.imageAlt}"
                    className="flex-none w-20 h-20 rounded-md object-center object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3>{product.name}</h3>
                    <p className="text-white">{product.color}</p>
                    <p className="text-white">{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="hidden text-sm font-medium text-white space-y-6 border-t border-white pt-6 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-white">Subtotal</dt>
                <dd>$320.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-white">Delivery</dt>
                <dd>$15.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-white">Taxes</dt>
                <dd>$26.80</dd>
              </div>

              <div className="flex items-center justify-between border-t border-white pt-6">
                <dt className="text-white">Total</dt>
                <dd className="text-white">$361.80</dd>
              </div>
            </dl>

            <Popover className="inset-x-0 flex flex-col-reverse text-sm font-medium text-white lg:hidden">
              <div className="relative z-10 bg-gray-700 border-t border-white px-4 sm:px-6">
                <div className="max-w-lg mx-auto">
                  <Popover.Button className="w-full flex items-center py-6 font-medium">
                    <span className="text-white mr-auto">Total</span>
                    <span className="text-white mr-2">$361.80</span>
                    <ChevronUpIcon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>

              <Transition.Root as="{Fragment}">
                <div>
                  <Transition.Child
                    as="{Fragment}"
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-white bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as="{Fragment}"
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-gray-50 px-4 py-6 sm:px-6">
                      <dl className="max-w-lg mx-auto space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-white">Subtotal</dt>
                          <dd>$320.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-white">Delivery</dt>
                          <dd>$15.00</dd>
                        </div>

                        <div className="flex items-center justify-between">
                          <dt className="text-white">Taxes</dt>
                          <dd>$26.80</dd>
                        </div>
                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
          </div>
        </section>

        <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-white"
              >
                Contact information
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autocomplete="email"
                    className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2
                id="payment-heading"
                className="text-lg font-medium text-white"
              >
                Payment details
              </h2>

              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-white"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autocomplete="cc-name"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-white"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autocomplete="cc-number"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-white"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autocomplete="cc-exp"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-white"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autocomplete="csc"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                id="shipping-heading"
                className="text-lg font-medium text-white"
              >
                Billing address
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-white"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autocomplete="street-address"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-white"
                  >
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-white"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autocomplete="address-level2"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-white"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      autocomplete="address-level1"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-white"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autocomplete="postal-code"
                      className="block w-full border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-10">
              <h2
                id="billing-heading"
                className="text-lg font-medium text-white"
              >
                Delivery information
              </h2>
              
              <div className="mt-6 flex items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 border-white rounded text-indigo-600 focus:ring-indigo-500"
                  onChange={Showdelivery}
                />
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-white"
                  >
                    Same as billing information
                  </label>
                </div>
              </div>
            </section>
            

            <div className="mt-10 pt-6 border-t border-white sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
              >
                Continue
              </button>
              <p className="mt-4 text-center text-sm text-white sm:mt-0 sm:text-left">
                You won't be charged until the next step.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
