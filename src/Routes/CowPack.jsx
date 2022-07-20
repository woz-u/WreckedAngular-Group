import { useCart } from 'react-use-cart';
import data from "./data";
const features = [
    {
      name: '$80.00',
      description: 'The Cow Pack includes the following.',
    },
    {
      name: 'Cows',
      description: '30 cows placed in the yard of an unsuspecting friend or family member.',
    },
    {
      name: 'Special Message',
      description:
        'A special message from you to the friend or family member to accompany the cows in the yard.',
    },
    { name: 'Time Period',
      description: 'The Herd will stay in the yard with the sign for 5 days and includes delivery and pickup.' },
  ]
  
  export default function CowPack(props) {
    const {product, onAdd} = props;
    const { addItem } = useCart();
    const {products} = data;
    const cowPack = products[1];

    return (
      <div className="bg-white">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
            <img
              src="https://www.coastalcountry.com/contentassets/96dbf28b649f488f9bf9065f7bcf7c4f/image4ziro.png"
              alt="Cows Everywhere! Who did this?"
              className="h-full w-full object-center object-cover lg:h-full lg:w-full"
            />
          </div>
  
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-indigo-400">
                Details for the
              </h2>
              <p className="mt-4 text-4xl font-extrabold text-indigo-600 tracking-tight">Cow Pack</p>
              <p className="mt-4 text-gray-500">
              This Package is great for someone with a regular sized yard that you want to congratulate or just give a good laugh to.
              </p>
              <br></br>

              <button onClick={() => addItem(cowPack)} className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl">
                Add to Cart
              </button>
                <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-indigo-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
                  <a className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-xl text-center" href="/CalfPack">
                  Previous Package
                  </a>
                  <a className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-xl text-center" href="/BullPack">
                  Next Package
                  </a>
              </dl>
            </div>
          </div>
        </section>
      </div>
    )
  }
  