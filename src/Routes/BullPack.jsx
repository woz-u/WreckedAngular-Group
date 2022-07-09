import Checkout from "./Checkout";
import { useCart } from 'react-use-cart';
import data from "./data";

const features = [
    {
      name: '$100.00',
      description: 'The Bull Pack includes the following.',
    },
    {
      name: 'Cows',
      description: '40 cows placed in the yard of an unsuspecting friend or family member.',
    },
    {
      name: 'Special Message',
      description:
        '2 special messages from you to the friend or family member to accompany the cows in the yard.',
    },
    { name: 'Time Period',
      description: 'The Herd will stay in the yard with the sign for 7 days and includes delivery and pickup.' },
  ]
  const {products} = data;
  export default function BullPack(props) {
    const {product, onAdd} = props;
    const { addItem } = useCart();
    return (
      <div className="bg-white">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
            <img
              src="http://2.bp.blogspot.com/-idwLaOtqUIA/TgDrKATtjtI/AAAAAAAABEs/IxCrsrIvt-Y/s1600/reindeer+son1.jpg"
              alt="Cows Everywhere! Who did this?"
              className="h-full w-full object-center object-cover lg:h-full lg:w-full"
            />
          </div>
  
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-indigo-400">
                Details for the
              </h2>
              <p className="mt-4 text-4xl font-extrabold text-indigo-600 tracking-tight">Bull Pack</p>
              <p className="mt-4 text-gray-500">
              This Package is the best of the best, this is perfect for someone that you want to take over their entire yard to congratulate or just give a good laugh to with 2 special messages.
              </p>
              <br></br>

              <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl">
                Add to Cart
              </button>
                <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-indigo-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
                  <a className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-xl text-center" href="/CowPack">
                  Previous Package
                  </a>
                  <a className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-xl text-center" href="/MadCow">
                  Next Package
                  </a>
              </dl>
            </div>
          </div>
        </section>
      </div>
    )
  }
  