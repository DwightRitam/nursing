import Head from 'next/head'
import Image from 'next/image'
import Hero from "../components/Hero"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>

			<Hero />
			<div className="px-5 pt-[-0.75rem] smallbg  dark:bg-gray-900  smallbg dark:text-gray-100">
				<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
					<div>
						<span>Get up to 50% off your first order + free appointment,&nbsp;</span>
						<Link href="/sign_in" rel="noopener noreferrer" className="underline">sign up</Link> today!
					</div>
					
						
				</div>
			</div>


			<section className=" dark:bg-gray-900 aboutbg">
				<div className="gap-8 items-center py-8  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
					<img className="w-[95%] m-auto dark:hidden h-[32rem]" src="https://www.pngitem.com/pimgs/m/193-1939059_indian-doctor-png-download-indian-doctor-images-png.png" alt="dashboard image" />
					<img className="w-full hidden dark:block" src="/assests/diana-polekhina-ZBstHWt9vLc-unsplash.jpg" alt="dashboard image" />
					<div className="mt-4 m-auto md:mt-0">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
						<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Doctorz Club is your one stop solution for all the things which can help you to keep a check of your health. Our services vary  from booking your nearest doctor's appointment to tracking down the reports of your lab tests to scheduling a doctor's consultation virtually and much more. Have a look for yourself :-)</p>
						<a href="#" className="inline-flex items-center text-blue-900 border border-slate-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
							Get started
							<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
				</div>
			</section>


			<section className="my-8 dark:bg-gray-800 sectionbg dark:text-gray-100">
				<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
					<h1 className="p-4 text-4xl font-semibold leading-none text-center">Find out the best doctors around you</h1>
				</div>
				<div className="grid grid-cols-1  gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
					<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
						<Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
							<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://www.pngitem.com/pimgs/m/194-1943714_doctors-and-nurses-transparent-png-image-indian-male.png" />
						</Link>
						<div className="flex flex-col flex-1 p-6">
							<div className="flex text-yellow-400">
								<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
							</div>
							<h3 className="flex-1  text-lg font-bold leading-snug  pt-[5px] pb-[2px]">Dr Z S Meharwal </h3>
							<h2 className="flex-1 text-lg font-semibold leading-snugpt-[5px] pb-[2px]">Cardiac Surgeon, New Delhi, India </h2>
							<p className="flex-1  md:py-0 text-lg font-medium leading-snug"> FORTIS ESCORTS HEART INSTITUTE, NEW DELHI </p>
							
							<Link href='/appointment'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Book appointment</h1> </button></Link>

						</div>
					</article>
					<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
						<Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
							<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://www.kindpng.com/picc/m/101-1018785_transparent-handsome-png-indian-doctor-image-png-png.png" />
						</Link>
						<div className="flex flex-col flex-1 p-6">
							<div className="flex text-yellow-400">
								<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 ">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
							</div>
							<h3 className="flex-1  text-lg font-bold leading-snug  pt-[5px] pb-[2px]">	
Dr. Sandeep Vaishya  </h3>
							<h2 className="flex-1 text-lg font-semibold leading-snugpt-[5px] pb-[2px]">Neurosurgeon, Gurgaon, India </h2>
							<p className="flex-1  md:py-0 text-lg font-medium leading-snug"> FORTIS ESCORTS HEART INSTITUTE, NEW DELHI </p>
							
							<Link href='/appointment'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Book appointment</h1> </button></Link>

						</div>
					</article>
					<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
						<Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
							<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://www.pngitem.com/pimgs/m/194-1943739_indian-doctor-hd-png-download.png" />
						</Link>
						<div className="flex flex-col flex-1 p-6">
							<div className="flex text-yellow-400">
								<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
							</div>
							<h3 className="flex-1  text-lg font-bold leading-snug  pt-[5px] pb-[2px]">Dr IPS Oberoi </h3>
							<h2 className="flex-1 text-lg font-semibold leading-snugpt-[5px] pb-[2px]">Neurosurgeon, Gurgaon, India </h2>
							<p className="flex-1  md:py-0 text-lg font-medium leading-snug"> FORTIS ESCORTS HEART INSTITUTE, NEW DELHI </p>
							
							
							<Link href='/appointment'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Book appointment</h1> </button></Link>

						</div>
					</article>
					<article className="flex flex-col dark:bg-gray-900 w-[89%] md:w-[100%] md:m-0 m-auto">
						<Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
							<img alt="" className="md:object-cover w-[89%] m-auto md:m-0 md:w-full h-[22rem]  md:h-[21rem] dark:bg-gray-500" src="https://www.pngkey.com/png/detail/10-109659_mbbs-direct-admission-indian-doctor-images-png.png" />
						</Link>
						<div className="flex flex-col flex-1 p-6">
							<div className="flex text-yellow-400">
								<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 ">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
								<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600 text-white">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</button>
							</div>
							<h3 className="flex-1  text-lg font-bold leading-snug  pt-[5px] pb-[2px]">Dr Y K Mishra </h3>
							<h2 className="flex-1 text-lg font-semibold leading-snugpt-[5px] pb-[2px]">NCardiac Surgeon, New Delhi, India </h2>
							<p className="flex-1  md:py-0 text-lg font-medium leading-snug"> FORTIS ESCORTS HEART INSTITUTE, NEW DELHI </p>
							
							<Link href='/appointment'><button type="button" className="px-5 py-2 md:px-8 md:py-3 mt-[20px] md:mt-[30px] font-semibold border rounded hover:border-slate-500 dark:border-gray-100 dark:text-gray-100"><h1>Book appointment</h1> </button></Link>

						</div>
					</article>
				</div>
			</section>
			<div className="flex flex-col feedbg  lg:max-w-xl border border-slate-700 mb-[7px] p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100  m-auto">
				<div className="flex flex-col items-center w-full">
					<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
					<div className="flex flex-col items-center py-6 space-y-3">
						<span className="text-center">How was your experience?</span>
						<div className="flex space-x-3  text-yellow-300">
							<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
							<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
							<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
							<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
							<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
						<button type="button" className="py-4 my-8 border border-black  font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
					</div>
				</div>

			</div>


		</>
	)
}
