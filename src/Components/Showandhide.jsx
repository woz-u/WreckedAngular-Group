import React from 'react'

function Showandhide() {
  return (
    <div>   <section aria-labelledby="shipping-heading" className="mt-10">
    <h2
      id="shipping-heading"
      className="text-lg font-medium text-white"
    >
      Delivery address
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

</div>
  )
}

export default Showandhide
         