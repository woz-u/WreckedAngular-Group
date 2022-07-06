export default function AboutUs() {
  return (
    <div className="relative ">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://media.istockphoto.com/photos/fresian-cow-hide-pattern-picture-id176130355?k=20&m=176130355&s=612x612&w=0&h=4ETlB2Fj2KGviXZHspoSqIPDCScSaKBPJdXRC0k4ZIc="
            alt="The Fuzzzz"
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0 bg-white">
            <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
              What is Be Herd?
            </h2>
            <p className="mt-8 text-2xl text-indigo-500">
            Be Herd is the latest way to celebrate a birthday, anniversary, or any other special occasion in the most hilarious way. Celebrate that special person by filling their yard with a herd of cow lawn ornaments. Set up and pickup included. Let your message Be Herd.
            </p>
            <div className="py-20">
              <h2 className="py-10 text-indigo-600 text-4xl font-bold">Our Team</h2>
              <p className="text-2xl text-indigo-500">
                Wrecked Angular is made up of 3 members, Sam, Jeremy, and Tim. We met at a coding bootcamp, Woz-U, and from there our relationship flourished.This website is the masterpiece we came up with. We hope you enjoy the idea and website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
