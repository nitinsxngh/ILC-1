"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Banner = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds
  
  // Hardcoded event end time (you can change this to any date/time you want)
  const eventEndTime = "2025-02-09T00:00:00Z"; // Format: YYYY-MM-DDTHH:MM:SSZ
  
  useEffect(() => {
    const targetTime = new Date(eventEndTime).getTime();
    
    const updateTimeLeft = () => {
      const now = Date.now();
      const timeRemaining = targetTime - now;
      setTimeLeft(timeRemaining > 0 ? Math.floor(timeRemaining / 1000) : 0); // Set time in seconds
    };
    
    updateTimeLeft(); // Call on initial render

    const timer = setInterval(updateTimeLeft, 1000); // Update every second
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [eventEndTime]);

  const handleApplyClick = () => {
    router.push("https://explore.ilc.limited/events"); // Redirects to upcoming events page
  };

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format the time for display as zero-padded digits
  const formatTime = (time: number): string[] => String(time).padStart(2, "0").split("");
  const formattedDays = formatTime(days);
  const formattedHours = formatTime(hours);
  const formattedMinutes = formatTime(minutes);
  const formattedSeconds = formatTime(seconds);

  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <img
          className="absolute top-24 pb-6 mt-4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] object-cover rounded-full md:block hidden"
          src={"/assets/logo/logo-new.svg"}
          alt="Company Logo"
        />
        <div className="mx-auto max-w-5xl pt-16 pb-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-xl sm:text-4xl pt-14 md:text-5xl font-bold tracking-tight text-gray-900">
              Integrated Learning Circle
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Customized Learning for Your Unique Experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <div className="hidden sm:block -space-x-2 overflow-hidden p-4">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/shreya-chopra-crop.jpeg"
                  alt="Shreya Chopra"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/suvigya.jpg"
                  alt="Suvigya"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/Kaushaki-Kumari.jpg"
                  alt="Kaushaki Kumari"
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="/assets/teachers/Ankit-Kumar.jpg"
                  alt="Ankit Kumar"
                />
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                  <img className="bg-[#a47c38]" src={"/assets/banner/Stars.svg"} alt="stars-icon" />
                </div>
                <div>
                  <h3 className="text-sm">Rated by users.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <h2 className="text-xl font-bold">ILC BOOTCAMP</h2>
                <p className="text-sm text-gray-600 pb-4">HURRY! Limited Slots Available</p>
              </div>
              <div className="flex items-center space-x-1 text-3xl font-bold">
                {formattedDays.length > 0 && (
                  <>
                    {formattedDays.map((digit, idx) => (
                      <div key={`day-${idx}`} className="flip-card">
                        <div className="flip-card-inner flip">
                          <div className="flip-card-front">{digit}</div>
                          <div className="flip-card-back">{digit}</div>
                        </div>
                      </div>
                    ))}
                    <span className="text-xl">:</span>
                  </>
                )}
                {formattedHours.map((digit, idx) => (
                  <div key={`hour-${idx}`} className="flip-card">
                    <div className="flip-card-inner flip">
                      <div className="flip-card-front">{digit}</div>
                      <div className="flip-card-back">{digit}</div>
                    </div>
                  </div>
                ))}
                <span className="text-xl">:</span>
                {formattedMinutes.map((digit, idx) => (
                  <div key={`min-${idx}`} className="flip-card">
                    <div className="flip-card-inner flip">
                      <div className="flip-card-front">{digit}</div>
                      <div className="flip-card-back">{digit}</div>
                    </div>
                  </div>
                ))}
                <span className="text-xl">:</span>
                {formattedSeconds.map((digit, idx) => (
                  <div key={`sec-${idx}`} className="flip-card">
                    <div className="flip-card-inner flip">
                      <div className="flip-card-front">{digit}</div>
                      <div className="flip-card-back">{digit}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleApplyClick}
                className="bg-[#a47c38] text-white font-bold py-4 px-6 rounded mt-6 sm:mt-0 z-10"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flip-card {
          width: 35px;  /* Adjusted size */
          height: 50px;  /* Adjusted size */
          border-radius: 5px;
          perspective: 1000px;
        }
        .flip-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: #050B55;
          color: white;
          text-align: center;
          line-height: 50px;  /* Adjusted line height */
          border-radius: 5px;
          font-size: 1.25rem;  /* Adjusted font size */
        }
        .flip-card-back {
          transform: rotateX(180deg);
        }
        .flip.flip-card-inner {
          transform: rotateX(180deg);
        }
        .banner-image {
          position: relative;
        }

        /* Adjustments for mobile responsiveness */
        @media (max-width: 640px) {
          .flip-card {
            width: 28px;  /* Smaller on mobile */
            height: 42px;  /* Smaller on mobile */
          }

          .flip-card-front, .flip-card-back {
            font-size: 1rem;  /* Smaller font size on mobile */
            line-height: 42px;  /* Adjusted line height */
          }

          .text-xl {
            font-size: 1rem;  /* Adjusted title size */
          }

          .text-lg {
            font-size: 0.85rem;  /* Smaller text on mobile */
          }

          .text-4xl {
            font-size: 1.6rem;  /* Smaller font for countdown */
          }

          .mt-6 {
            margin-top: 1rem;
          }

          .py-4 {
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
          }

          .px-6 {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          button {
            width: 100%;  /* Full-width button */
            padding: 14px;
          }
        }
      `}</style>
    </main>
  );
};

export default Banner;
