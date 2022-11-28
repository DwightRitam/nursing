import React, { useState } from 'react'
import Link from 'next/link';


const Navbar = () => {

  const [navbar, setNavbar] = useState(false);


  const [toggledclass, settoggledclass] = useState("hidden");


  const toggle = () => {
    if (toggledclass == "hidden") {
      settoggledclass("block")
    }
    else {
      settoggledclass("hidden")
    }

  }

  return (
    <>
      <div className='sticky'>

        <nav className="w-full  navbg shadow ">
          <div className="md:justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center md:text-center justify-between py-3 md:py-5 md:block">

                <div className="md:hidden">
                  <button
                    className="mr-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 navsvg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>



                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 navsvg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                      </svg>


                    )}
                  </button>
                </div>
                <Link href="/">
                  <h2 className="text-2xl Filmotrend text-white font-bold">Doctorz Club</h2>
                </Link>
                <ul className=" flex md:hidden text-red-600 items-center md:ml-6   md:space-x-1 md:space-y-0 ">

                  < li className="text-black p-3">

                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                      <label for="Search" className="hidden">Search</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                              <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                          </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                      </div>
                    </fieldset>

                  </li>
                  < li className="text-white p-3">
                    <Link href="/login">

                      <h2>Login</h2>
                    </Link>

                  </li>


                </ul>

              </div>


            </div>
            <div>
              <div
                className={`flex-1 justify-self-center   pb-3 phoneli md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                  }`}
              >
                <ul className="  items-center md:ml-6 md:justify-between md:flex md:space-x-1 md:space-y-0 ">
                  <li className="text-white p-3 text-lg">
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className="text-white p-3">
                    <Link href="/about">
                      About
                    </Link>
                  </li>

                  <li className="text-white p-3">
                    <Link href="/contact">
                      Contact

                    </Link>
                  </li>
                  <li className="text-white p-3 ">

                    <div class="p-[0.5rem]">

                      <div onMouseEnter={toggle} onMouseLeave={toggle} class=" dropdown inline-block relative">
                        <button class="  font-semibold py-2 mt-[-9px] md:m-0 ml-[-24px] md:ml-[-25px] px-4 rounded inline-flex items-center">
                          <span class="mr-1">Services</span>
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class={`dropdown-menu absolute ${toggledclass} text-gray-700 pt-1`}>
                          <Link href='/appointment'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Doctor's Appointment</li></Link>
                          <Link href='/reports'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Track Your reports</li></Link>
                          <Link href='/cure'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Diseases and it's cure</li></Link>
                          <Link href='/medicines'> <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Order Medicines</li></Link>
                        
            
                        </ul>
                      </div>

                    </div>


                  </li>



                </ul>

              </div>

            </div>
            <ul className="hidden text-red-600 items-center md:ml-6 md:justify-between md:flex md:space-x-1 md:space-y-0 ">

              < li className="text-black p-3">

                <fieldset className="w-full space-y-1 dark:text-gray-100">
                  <label for="Search" className="hidden">Search</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                          <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                      </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                  </div>
                </fieldset>

              </li>
              < li className="text-white p-3">
                <Link href="/login">

                  <h2>Login</h2>
                </Link>

              </li>





            </ul>
          </div>
        </nav>

      </div>

    </>
  )

}


export default Navbar