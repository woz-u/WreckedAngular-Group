import React, {useState, Component} from "react";
import data from "./data";
import Showandhide from "../Components/Showandhide";
import { useCart } from 'react-use-cart';
import { BiPlusCircle } from "react-icons/bi";
import { BiMinusCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";


const {products} = data;


  function Checkout() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
  } = useCart(0);
  const itemsPrice = items.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.14;
  const deliveryPrice = itemsPrice > 150 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + deliveryPrice;
  
  

  const[toggle, setToggle] = useState(false)
  
  return (
    <div>
      <div className="bg-slate-600 text-white text-center text-2xl pb-2">
        Orders Over $150 Will Recieve Free Delivery!
        </div>
    <div className="bg-slate-800">
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
          className="pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-0 lg:bg-transparent lg:row-start-1 lg:col-start-2 bg-gray-700"
        >
          <div className="max-w-lg mx-auto lg:max-w-none bg-slate-700 pt-10 pb-10 pl-10 pr-10 rounded-xl border-4 border-white border-double">
            <div className="">
            <h2 id="summary-heading" className="text-lg font-medium text-white">
              Order summary
            </h2>
            <div className="text-right">
            <h3 className="text-white align-right pb-2">Price</h3>
            </div>
            </div>
            <hr></hr><br></br>
            

        <div className="text-white">
          <ul>
                {items.map((item) => (
                    <li  key={item.id}>
                      <div className="">
                        {item.name} &nbsp; &nbsp;</div>
                        <div className="text-right">  ${item.price} x {item.quantity} </div><br></br>
                        <div className="text-right">
                        <button className="text-white bg-indigo-600 p-2 rounded-3xl hover:opacity-50 text-2xl mt-6" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        <BiMinusCircle/>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="text-white bg-indigo-600 p-2 rounded-3xl hover:opacity-50 text-2xl mt-6" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        <BiPlusCircle/>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="text-white bg-slate-600 p-1 hover:bg-red-900 rounded " onClick={() => removeItem(item.id)}><BiTrash/></button>
                        </div>

                    </li>
                ))}
            </ul>
            <br></br>
            {items.length !== 0 && (
              <>
                <hr></hr><br></br>
                <div className="row text-white text-left">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div><br></br>
                </div>
                <div className="row text-white text-left">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1 text-right">${taxPrice.toFixed(2)}</div><br></br>
                </div>
                <div className="row text-white text-left">
                  <div className="col-2">Delivery Price</div>
                  <div className="col-1 text-right">${deliveryPrice.toFixed(2)}</div><br></br>
                </div>
                <hr></hr><br></br>
                <div className="row text-white text-left">
                  <div className="col-2"><strong>Total Price</strong></div>
                  <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                </div>
              </>
            )}
            </div>
          </div>
        </section>

        <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
          <div className="max-w-lg mx-auto lg:max-w-none bg-slate-700 p-10 rounded-xl border-4 border-white border-double">
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

              
              <div className="mt-6 flex items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 border-white rounded text-indigo-600 focus:ring-indigo-500"
                  onClick={() => setToggle(!toggle)}
                />
                
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-white"
                  >
                    Delivery information same as billing information.
                  </label> 
                </div>
              </div><br></br>
              {toggle && (<Showandhide></Showandhide>)}
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
  </div>
  );
};

export default Checkout;
