// MENTORS DATA

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Venture Capitalist',
        href: '#',
        imageSrc: '/assets/mentor/12.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Prateek Tosniwal',
    },
    {
        id: 2,
        name: 'Advocate',
        href: '#',
        imageSrc: '/assets/mentor/11.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Raghumanyu Taneja',
    },
    {
        id: 3,
        name: 'Professor',
        href: '#',
        imageSrc: '/assets/mentor/10.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Sulakshana Banerjee',
    },
    {
        id: 4,
        name: 'Founder & CEO @ IDEA | Social Entrepreneur',
        href: '#',
        imageSrc: '/assets/mentor/14.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Mallikarjuna Iytha',
    },
    {
        id: 5,
        name: 'Professor',
        href: '#',
        imageSrc: '/assets/mentor/13.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Chandamita Nath',
    },
    {
        id: 6,
        name: 'Professor',
        href: '#',
        imageSrc: '/assets/mentor/9.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Sumit Aggarwal',
    },
    {
        id: 7,
        name: 'Professor',
        href: '#',
        imageSrc: '/assets/mentor/15.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Barnika Bhuyan',
    },
]

const Mentor = () => {
    return (
            <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Meet with our Advisors & Mentors</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                            Explore 10+ our Mentor
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center ">
                                <div>
                                    <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                        <h3 className="text-sm text-gray-700 text-center">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-offblack text-center">{product.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Mentor;
