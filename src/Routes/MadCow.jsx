import Checkout from "./Checkout";
import { useCart } from 'react-use-cart';
import data from "./data";
const features = [
    {
      name: '$50.00 + Tax',
      description: 'The Mad Cow Special includes the following.',
    },
    {
      name: 'Cows',
      description: '50 cows placed in the yard of an unsuspecting friend or family member.',
    },
    {
      name: 'Special Message',
      description:
        '2 special messages from you to the friend or family member to accompany the cows in the yard.',
    },
    { name: 'Time Period',
      description: 'The Herd will stay in the yard with the sign for 7 days and includes delivery and pickup.' },
  ]
  
  export default function MadCow(props) {
    const {product, onAdd} = props;
    const { addItem } = useCart();
    const {products} = data;
    return (
      <div className="bg-white">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bulls_Ishikawa%2C_Okinawa_2007.jpg/800px-Bulls_Ishikawa%2C_Okinawa_2007.jpg"
              alt="Cows Everywhere! Who did this?"
              className="h-full w-full object-center object-cover lg:h-full lg:w-full"
            />
          </div>
  
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-indigo-400">
                Details for the
              </h2>
              <p className="mt-4 text-4xl font-extrabold text-indigo-600 tracking-tight">Mad Cow Special</p>
              <p className="mt-4 text-gray-500">
                This Package is our Special Offer only to those who were Herd'ed by someone else, take your revenge now at a discounted price!
              </p>
              <br></br>
              <div>
                 {products.map((p) => (
                  <div key={p.id}>
                    <button className="bg-blue-600 text-white hover:opacity-75 p-2" onClick={() => addItem(p)}>Add to cart</button>
                  </div>
                 ))}
              </div>
              <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-indigo-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
    )
  }
  