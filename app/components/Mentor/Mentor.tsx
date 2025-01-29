'use client';

import React, { useEffect, useState } from 'react';

// Define the structure of a mentor
interface Mentor {
  _id: {
    $oid: string;
  };
  img: string;
  name: string;
  email: string;
  jobTitle: string;
  jobCompany: string;
  mentorId: string;
  date: {
    $date: {
      $numberLong: string;
    };
  };
  __v: {
    $numberInt: string;
  };
}

const Mentor = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  // Fetch the mentor data from the API
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('https://api.ilc.limited/api/mentors');
        const data = await response.json();
        setMentors(data); // Store the mentor data in state
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="sm:flex justify-between items-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Meet with our Advisors & Mentors</h2>
        <div>
          <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
            Explore 10+ our Mentor
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {mentors.map((mentor) => (
          <div key={mentor._id.$oid} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <div>
                <div className="border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow">
                  <h3 className="text-sm text-gray-700 text-center">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {mentor.jobTitle}
                    </a>
                  </h3>
                </div>
                <p className="mt-3 text-2xl font-semibold text-offblack text-center">{mentor.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
