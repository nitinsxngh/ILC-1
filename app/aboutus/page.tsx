import React from 'react';

const teamMembers = [
  {
    name: "Shreya Chopra",
    role: "Founder | MD", // Correctly escaped ampersand
    photo: "/assets/teachers/shreya-chopra.jpeg",
    description: "Shreya Chopra is holding B.Com (Hon.) LL.B. graduation degree , Masters in Corporate Law , and currently pursuing Doctorate of Philosophy in Legal Real Estate frauds . Worked as Legal Executive in Real Estate Regulatory Authority and as an Assistant Professor too. Apart from Academics she has been crowned as Miss India 2017 from Glammonn and been the Social Voice for the campaign 'Beti Bachao Beti Padhao' along with being the Brand Ambassador for Bharat Scouts and Guides . Spoken and Stood for legal rights for 'Betiyan' on national News Channels like C.N.B.C. , ZEE Hindustan , Mh1 etc. And Awarded 42 Government Awards for Educating them , Visiting them and Supporting them in their Legal Rights.",
  },
  {
    name: "Susrith Godavarthi",
    role: "IT Team | Social Media", // Correctly escaped ampersand
    photo: "/assets/teachers/Susrith-Godavarthi.jpg",
    description: "Susrith godavarthi is a skilled Machine Learning Engineer with a strong drive for transforming data into meaningful, actionable insights. Known for tackling complex challenges, Susrith leverages advanced technologies to design innovative solutions that push the boundaries of what’s possible. Beyond his professional pursuits, Susrith has a passion for travel and cultural exploration, enriching his creativity and bringing a fresh perspective to his work. He is enthusiastic about connecting with others and sharing his journey in the world of Integrated Legal Circle (ILC), where he aims to make a significant impact in the intersection of technology and legal advancement.",
  },
  {
    name: "Suvigya Tiwari",
    role: "AI | IPR", // Correctly escaped ampersand
    photo: "/assets/teachers/suvigya.jpg",
    description: "Suvigya is an expert at the intersection of artificial intelligence (AI) and intellectual property rights (IPR). With a strong understanding of both AI technologies and legal frameworks, Suvigya helps businesses protect their innovations, ensuring compliance with patent, copyright, and trademark laws. Suvigya’s expertise enables organizations to navigate the complexities of IPR in the rapidly evolving AI space.",
  },
  {
    name: "Kaushaki Kumari",
    role: "Legal Researcher | Education Head",
    photo: "/assets/teachers/Kaushaki-Kumari.jpg",
    description: "Kaushaki Kumari, a distinguished law graduate with a Bachelor of Laws (BA LLB) degree, combines academic excellence, practical expertise, and innovative leadership in the legal field. As an active member of her university’s Moot Court Committee, she contributed to fostering critical legal skills among peers and advancing legal education. With hands-on experience at reputed organizations like AIHRA and Tulja Estates, she specializes in corporate law, legal research, and strategic case preparation. Recognized for her impactful publications and process optimization initiatives, Kaushaki’s ability to navigate complex legal challenges with precision distinguishes her as a forward-thinking legal professional.",
  },
  {
    name: "Ankit Kumar",
    role: "Project Manager",
    photo: "/assets/teachers/Ankit-Kumar.jpg",
    description: "Ankit Kumar possesses a strong interest in Contract Drafting, Intellectual Property Law, Arbitration, Corporate Law, and Company Law. Backed by a solid foundation of academic knowledge and practical experience, he offers insightful legal analysis and strategic support in these domains. Driven by a passion for excellence in the legal field, he is committed to enhancing his expertise and making a meaningful impact through his contributions.", // Correctly escaped single quote
  }
];

const AboutUs = () => {
  return (
    <div className="relative px-6 lg:px-8 bg-white rounded-lg shadow-md mt-16 mb-64 py-12 min-h-screen">
      {/* Background logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/assets/logo/ilc-logo.svg')" }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#a47c38] text-center mb-12">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Integrated Legal Circle ILC is a dynamic startup committed to empowering the legal
              community by fostering connections and providing comprehensive resources. We offer a
              robust platform encompassing both online and offline legal training, certified
              courses, and access to specialized legal expertise. Our core mission is to bridge the
              critical gap between academic legal education and practical application in the
              professional world. We achieve this by facilitating meaningful connections between
              skilled professionals, leading companies, universities, and multinational
              corporations MNCs. Through our integrated approach, we empower individuals with the
              essential skills and knowledge necessary to not only survive but thrive in todays
              competitive legal landscape.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We envision a future where all legal professionals, regardless of their background,
              have access to the resources and support they need to reach their full potential. We
              strive to create a platform that cultivates highly skilled, well-prepared individuals
              and seamlessly connects them with rewarding career opportunities through targeted value
              enhancement programs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to empower aspiring and established legal professionals by bridging the
              gap between theoretical knowledge and practical expertise. We achieve this through
              value-driven training, mentorship, and networking opportunities that provide both
              learning and earning potential. We are dedicated to fostering a community of skilled
              individuals who are prepared to excel in their legal careers.
            </p>
          </section>

          <h2 className="text-[#a47c38] text-2xl font-bold text-center underline mt-16 mb-8">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col h-[26rem] lg:h-[28rem] transition-transform duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div
                  className="flex-shrink-0 w-full h-[18rem] bg-center bg-cover rounded-t-lg"
                  style={{ backgroundImage: `url(${member.photo})` }}
                ></div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div>
                    <h3 className="text-[#a47c38] text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>

                {/* Hover Effect for Description */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-sm text-left animate-fadeIn text-[#a47c38]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
