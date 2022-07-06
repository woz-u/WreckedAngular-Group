import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'; 
import { doc, setDoc } from 'firebase/firestore';



const footerNavigation = {
  company: [
    { name: "Who we are", href: "/AboutUs" },
    { name: "Terms & Conditions", href: "https://www.termsandcondiitionssample.com/live.php?token=ijmHsxm4jUjmqnoROJdiRLUHeAMwSwC3" },
    { name: "Privacy", href: "https://www.privacypolicygenerator.info/live.php?token=AFn6QInf62PcGi5BgKQzHrYHtlb8Up13" },
  ],
  account: [
    { name: "Manage Account", href: "/SignIn" },
    { name: "Create Account", href: "/Signup" },
    { name: "Support", href: "mailto:beherdsocialmanager@gmail.com" },

  ],
  Socials: [
    { name: "Twitter", href: "https://twitter.com/ManagerHerd" },
    { name: "Instagram", href: "https://www.instagram.com/be_herd_manager/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100082685704890" },
  ],
};



function Footer() {

  const newsLetter = (email) => {
    return setDoc(doc(db, 'NewsLetter', email), {
    });
  };

  
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  const handleSubmitNewsLetter = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await newsLetter(email);
      navigate("");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setEmail("");
  };

  return (
    <div className="border-t border-indigo-600">
      <footer aria-labelledby="footer-heading" className="bg-gray-900">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-4 xl:col-span-2 ">
              <div className="flex space-between space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              <br></br>
                <div>
                  <h3 className="text-large font-medium  text-indigo-500">About Us</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-indigo-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-large font-medium  text-indigo-500">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-indigo-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-large font-medium text-indigo-500">Socials</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.Socials.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-indigo-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-indigo-500">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-indigo-300">
                Get the latest deals and savings, sent to your inbox monthly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only text-white">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-slate-600 border border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-600"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                    onClick={handleSubmitNewsLetter}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-indigo-600 py-10">
            <p className="text-sm text-indigo-400 flex justify-center">
              Copyright &copy; 2021 BeHerd Company Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
