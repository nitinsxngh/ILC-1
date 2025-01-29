'use client';
import * as React from 'react';
import { useState } from 'react';
import { GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline';

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: 'Law' | 'Other' | 'Management' | 'AI' | 'Finance';
    subCategory?: string;
}

const names: Name[] = [
    // Law Courses
    { course: 'Corporate Law', imageSrc: '/assets/courses/law/1.jpg', profession: 'Learn the essentials of corporate law and regulations.', price: '100', category: 'Law' },
    { course: 'Intellectual Property Law', imageSrc: '/assets/courses/law/2.jpg', profession: 'Understand patents, trademarks, and copyrights.', price: '120', category: 'Law' },
    { course: 'Cyber Law', imageSrc: '/assets/courses/law/3.jpg', profession: 'Study legal frameworks for cybersecurity and IT.', price: '110', category: 'Law' },
    { course: 'Environmental Law', imageSrc: '/assets/courses/law/4.jpg', profession: 'Explore laws related to environmental protection.', price: '90', category: 'Law' },

    // Drone Courses
    { course: 'Kisan Drone Operator', imageSrc: '/assets/courses/drone/1.jpg', profession: 'Operate drones for agricultural monitoring, spraying, and data collection.', price: '50', category: 'Other', subCategory: 'Drone' },
    { course: 'Drone Technology', imageSrc: '/assets/courses/drone/2.jpg', profession: 'Learn the basics of drone technology and flight operations.', price: '75', category: 'Other', subCategory: 'Drone' },

    // Engineering Courses
    { course: 'Mechanical Engineering Basics', imageSrc: '/assets/courses/engineer/1.jpg', profession: 'Learn the fundamentals of mechanical engineering.', price: '60', category: 'Other', subCategory: 'Engineering' },
    { course: 'Electrical Engineering Concepts', imageSrc: '/assets/courses/engineer/2.jpg', profession: 'Understand electrical systems and circuits.', price: '80', category: 'Other', subCategory: 'Engineering' },

    // Management Courses
    { course: 'Project Management Essentials', imageSrc: '/assets/courses/management/1.png', profession: 'Master the fundamentals of project management.', price: '150', category: 'Management' },
    { course: 'Business Strategy', imageSrc: '/assets/courses/management/2.png', profession: 'Learn strategic thinking for business success.', price: '140', category: 'Management' },

    // AI Courses
    { course: 'Artificial Intelligence for Beginners', imageSrc: '/assets/courses/ai/1.png', profession: 'Learn the basics of AI and machine learning.', price: '200', category: 'AI' },
    { course: 'Deep Learning', imageSrc: '/assets/courses/ai/2.png', profession: 'Advanced deep learning techniques for AI experts.', price: '250', category: 'AI' },

    // Finance Courses
    { course: 'Financial Management Basics', imageSrc: '/assets/courses/finance/1.png', profession: 'Understand financial systems and business operations.', price: '120', category: 'Finance' },
    { course: 'Investment Strategies', imageSrc: '/assets/courses/finance/2.png', profession: 'Learn the art of managing investments effectively.', price: '180', category: 'Finance' },
];

const categoryIcons = {
    Law: GlobeAltIcon,
    Other: StarIcon,
    Management: GlobeAltIcon,  // Use different icon for Management
    AI: StarIcon,  // Use different icon for AI
    Finance: GlobeAltIcon,  // Use different icon for Finance
};

const categories = ['Legal', 'Drone', 'Engineering', 'Management', 'AI', 'Finance'];

const NamesList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Legal');
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    // Filter courses based on category selection
    const filteredNames = names.filter((name) =>
        selectedCategory === 'Legal'
            ? name.category === 'Law'
            : selectedCategory === 'Drone'
            ? name.subCategory === 'Drone'
            : selectedCategory === 'Engineering'
            ? name.subCategory === 'Engineering'
            : name.category === selectedCategory
    );

    return (
        <div>
            <div id="courses-section" className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex justify-between items-center pb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
                        Integrated{' '}
                        {/* Dropdown for selecting category in place of "Learning" */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-transparent text-purple font-medium py-4 px-6 rounded focus:outline-none focus:ring-0"  // Increased padding
                        >
                            <option value="Legal">Legal</option>
                            <option value="Drone">Drone</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Management">Management</option>
                            <option value="AI">AI</option>
                            <option value="Finance">Finance</option>
                        </select>{' '}
                        Circle
                    </h2>

                    <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                        Explore Classes
                    </button>
                </div>

                {/* Subcategory dropdown for "Other" category */}
                {selectedCategory === 'Drone' || selectedCategory === 'Engineering' ? (
                    <div className="flex mt-4 space-x-4">
                        <button
                            onClick={() => setSelectedSubCategory(null)}
                            className={`${selectedSubCategory === null ? 'font-bold underline' : ''}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectedSubCategory('Drone')}
                            className={`${selectedSubCategory === 'Drone' ? 'font-bold underline' : ''}`}
                        >
                            Drone
                        </button>
                        <button
                            onClick={() => setSelectedSubCategory('Engineering')}
                            className={`${selectedSubCategory === 'Engineering' ? 'font-bold underline' : ''}`}
                        >
                            Engineering
                        </button>
                    </div>
                ) : null}

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {filteredNames.length > 0 ? (
                                    filteredNames.map((name, index) => (
                                        <div key={index}>
                                            <div className="text-lg sm:text-sm py-5 lg:py-0">
                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                        src={name.imageSrc}
                                                        alt={name.imageSrc}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="mt-6 block font-normal text-gray-900">{name.course}</div>
                                                </div>
                                                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold">
                                                    {name.profession}
                                                </p>
                                                <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
                                                    <p>12 Classes</p>
                                                    <div className="flex flex-row space-x-4">
                                                        <div className="flex">
                                                            <img src={'/assets/courses/account.svg'} alt="circle" />
                                                            <p className="text-lightgrey ml-1">120</p>
                                                        </div>
                                                        <div className="flex">
                                                            <img src={'/assets/courses/Star.svg'} alt="star" />
                                                            <p className="ml-1">4.5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No courses available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NamesList;
