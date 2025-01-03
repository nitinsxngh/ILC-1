"use client";
import { useRouter } from "next/navigation"; // Import from next/navigation
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';

const Banner = () => {
  const router = useRouter(); // Correct use of useRouter

  const handleStartClick = () => {
    router.push("/#courses-section"); // Navigate to the courses section
  };

  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        {/* Logo Image */}
        <img
          className="absolute top-24 pb-6 mt-4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 object-cover rounded-full hidden md:block"
          src={"/assets/logo/ilc-logo.svg"}
          alt="Company Logo"
        />
        <div className="mx-auto max-w-5xl pt-16 pb-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl pt-14 md:text-5xl font-bold tracking-tight text-gray-900">
              Expertise Your Legal Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Transforming Learning to Build Skills, Foster Connections, and Unlock Career Opportunities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden p-4">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/shreya-chopra.jpeg"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/pranshi-singh.jpeg"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/Kaushaki-Kumari.jpg"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/Ankit-Kumar.jpg"
                  alt=""
                />
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                  <img src={"/assets/banner/Stars.svg"} alt="stars-icon" />
                </div>
                <div>
                  <h3 className="text-sm">Rated by users.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS */}

          <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
              <div className="col-span-3">
                <Dropdownone />
              </div>
              <div className="col-span-3">
                <Dropdowntwo />
              </div>
              <div className="col-span-3 sm:col-span-2 mt-2">
                <button
                  onClick={handleStartClick}
                  className="bg-purple w-full hover:bg-purple-dark text-white font-bold py-4 px-3 rounded"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
