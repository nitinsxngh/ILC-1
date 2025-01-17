"use client";
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: "Law" | "Other";
    subCategory?: string;
}

const names: Name[] = [
    // Law Courses
    { course: "Corporate Law", imageSrc: "/assets/courses/law/1.jpg", profession: "Learn the essentials of corporate law and regulations.", price: "100", category: "Law" },
    { course: "Intellectual Property Law", imageSrc: "/assets/courses/law/2.jpg", profession: "Understand patents, trademarks, and copyrights.", price: "120", category: "Law" },
    { course: "Cyber Law", imageSrc: "/assets/courses/law/3.jpg", profession: "Study legal frameworks for cybersecurity and IT.", price: "110", category: "Law" },
    { course: "Environmental Law", imageSrc: "/assets/courses/law/4.jpg", profession: "Explore laws related to environmental protection.", price: "90", category: "Law" },

    // Other Courses
    { course: "Kisan Drone Operator", imageSrc: "/assets/courses/drone/1.jpg", profession: "Operate drones for agricultural monitoring, spraying, and data collection.", price: "50", category: "Other", subCategory: "Drone" },
    { course: "Drone Technology", imageSrc: "/assets/courses/drone/2.jpg", profession: "Learn the basics of drone technology and flight operations.", price: "75", category: "Other", subCategory: "Drone" },
    { course: "Mechanical Engineering Basics", imageSrc: "/assets/courses/engineer/1.jpg", profession: "Learn the fundamentals of mechanical engineering.", price: "60", category: "Other", subCategory: "Engineering" },
    { course: "Electrical Engineering Concepts", imageSrc: "/assets/courses/engineer/2.jpg", profession: "Understand electrical systems and circuits.", price: "80", category: "Other", subCategory: "Engineering" },
];

const categoryIcons = {
    Law: GlobeAltIcon,
    Other: StarIcon,
};
const categories = Object.keys(categoryIcons) as (keyof typeof categoryIcons)[];

const NamesList = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryIcons>("Law");
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    // Fixing the uniqueSubCategories issue using Array.from
    const uniqueSubCategories = Array.from(
        new Set(
            names
                .filter((name) => name.category === "Other" && name.subCategory !== undefined)
                .map((name) => name.subCategory as string)
        )
    );

    const selectedNames = names.filter(
        (name) =>
            name.category === selectedCategory &&
            (selectedSubCategory === null || name.subCategory === selectedSubCategory)
    );

    return (
        <div>
            <div id="courses-section" className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex justify-between items-center pb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Integrated Learning Circle</h2>
                    <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                        Explore Classes
                    </button>
                </div>

                <div className="flex whitespace-nowrap space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSelectedSubCategory(null);
                                }}
                                className={`bg-white pb-2 ${
                                    selectedCategory === category ? "text-black border-b-2 border-orange" : "text-lightgrey"
                                } hidden sm:block`}
                            >
                                {category}
                            </button>
                        );
                    })}

                    {/* Mobile View Icons */}
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                            <Icon
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSelectedSubCategory(null);
                                }}
                                width={70}
                                height={70}
                                className={`block sm:hidden ${
                                    selectedCategory === category ? "border-b-2 border-orange fill-orange" : ""
                                }`}
                            />
                        );
                    })}
                </div>

                {selectedCategory === "Other" && (
                    <div className="flex mt-4 space-x-4">
                        <button
                            onClick={() => setSelectedSubCategory(null)}
                            className={`${
                                selectedSubCategory === null ? "font-bold underline" : ""
                            }`}
                        >
                            All
                        </button>
                        {uniqueSubCategories.map((subCategory, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSubCategory(subCategory || null)}
                                className={`${
                                    selectedSubCategory === subCategory ? "font-bold underline" : ""
                                }`}
                            >
                                {subCategory}
                            </button>
                        ))}
                    </div>
                )}

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {selectedNames.length > 0 ? (
                                    selectedNames.map((name, index) => (
                                        <div key={index}>
                                            <div className="text-lg sm:text-sm py-5 lg:py-0">
                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img src={name.imageSrc} alt={name.imageSrc} className="h-full w-full object-cover object-center" />
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
                                                            <img src={"/assets/courses/account.svg"} alt="circle" />
                                                            <p className="text-lightgrey ml-1">120</p>
                                                        </div>
                                                        <div className="flex">
                                                            <img src={"/assets/courses/Star.svg"} alt="star" />
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
