import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Shreya Chopra",
      role: "Founder & MD",
    },
    {
      name: "Priyanka Singh",
      role: "Product Manager",
    },
    {
      name: "Pranshi Singh",
      role: "Legal Head",
    },
    {
      name: "Susrith Godavarthi",
      role: "IT Team & Social Media",
    },
    {
      name: "Suvigya Tiwari",
      role: "AI & IPR",
    },
    {
      name: "Ankit Kumar",
      role: "Legal Researcher",
    },
    {
      name: "Kaushaki Kumari",
      role: "Legal Researcher",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Core Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;