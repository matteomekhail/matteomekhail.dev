/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s2GOOKsmAag
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Project() {
    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32" id="projects">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-300 to-purple-400">My Featured Projects</h2>
                    <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Check out some of our latest and greatest projects that showcase our design and development expertise.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12 text-gray-800 dark:text-gray-300">
                    <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
                        <Link className="block" href="https://fitfoodco.au">
                            <div className="relative">
                                <img
                                    alt="Project 1"
                                    className="w-full h-40 object-cover"
                                    height={400}
                                    src="./img/logo.webp"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "scale-down",
                                    }}
                                    width={600}
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-white text-2xl font-bold">View Project</div>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-black">
                                <h3 className="text-lg font-semibold group-hover:underline">FitFoodCo</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fuel your fitness journey with expertly crafted, nutritious meals
                                    where health meets taste!</p>
                                <div className="mt-4">
                                    <Link
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                        href="https://fitfoodco.au"
                                    >
                                        View Project
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
                        <Link className="block" href="https://ciroabeauty.com">
                            <div className="relative">
                                <img
                                    alt="Project 2"
                                    className="w-full h-40 object-cover bg-[#EEC9CD]"
                                    height={400}
                                    src="https://ciroabeauty.com/wp-content/uploads/2024/01/CIROA_LOGO-1-removebg-preview.png"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ">
                                    <div className="text-white text-2xl font-bold">View Project</div>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-black">
                                <h3 className="text-lg font-semibold group-hover:underline">Ciroa</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Elevate your home and self-care routine with beautifully crafted collections.</p>
                                <div className="mt-4">
                                    <Link
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                        href="https://ciroabeauty.com"
                                    >
                                        View Project
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="group overflow-hidden rounded-lg shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
                        <Link className="block" href="https://yourprojecturl.com">
                            <div className="relative">
                                <img
                                    alt="Caribbean Pools"
                                    className="w-full h-40 object-cover"
                                    height={400}
                                    src="https://yourprojectimageurl.com"
                                    style={{
                                        aspectRatio: "600/400",
                                        objectFit: "cover",
                                    }}
                                    width={600}
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-white text-2xl font-bold">View Project</div>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-black">
                                <h3 className="text-lg font-semibold group-hover:underline">Your Project Name</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your project description goes here.</p>
                                <div className="mt-4">
                                    <Link
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                        href="https://yourprojecturl.com"
                                    >
                                        View Project
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

function ArrowRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
