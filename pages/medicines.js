import React from 'react'

const medicines = () => {
  return (
    <>
    <h2 className='text-3xl text-center pt-3'>medicines </h2>
    <hr className='w-[80%] m-auto'/> <br/>
   <hr className='w-[50%] m-auto pb-[25px]'/>

<section class=" dark:bg-gray-900">
    
    <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Find out About your nearby store to get your medicines more faster way and far more safer way</h2>
        <hr className='w-[80%] m-auto'/> <br/>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className=" text-lg font-semibold">Search For medicine's Inormation</p>
				<p className="text-xs font-medium">Search for their location,names for contacting first</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="Search For medicine's name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				
			
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
			</div>
		</fieldset>
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="h-80 dark:bg-gray-500 aspect-video mt-[12%]" />
      <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
	<ul className="space-y-12">
		<li className="flex items-start space-x-3">
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-gray-400">
					<a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400 dark:bg-violet-400"></span>
						<span className="group-hover:underline dark:text-gray-100">packed</span>
					</a>
					<span className="text-xs whitespace-nowrap">10h ago</span>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.</p>
				</div>
			</div>
		</li>
		<li className="flex items-start space-x-3">
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-gray-400">
					<a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400 dark:bg-violet-400"></span>
						<span className="group-hover:underline dark:text-gray-100">Shipped</span>
					</a>
					<span className="text-xs whitespace-nowrap">7 hours  ago</span>
				</div>
				<div className="space-y-2">
					<p>Scelerisque amet elit non sit ut tincidunt condimentum. Nisi ultrices eu venenatis diam.</p>
					<p>Illum quaerat ab inventore, eveniet repudiandae saepe, iste sed molestias laborum atque, quos reprehenderit fugit cumo!</p>
				</div>
			</div>
		</li>
		<li className="flex items-start space-x-3">
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-gray-400">
					<a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-400 dark:bg-violet-400"></span>
						<span className="group-hover:underline dark:text-gray-100">Delivered</span>
					</a>
					<span className="text-xs whitespace-nowrap">10 hours  ago</span>
				</div>
				<div className="space-y-2">
					<p>Scelerisque amet elit non sit ut tincidunt condimentum. Nisi ultrices eu venenatis diam.</p>
					<p>Illum quaerat ab inventore, eveniet repudiandae saepe, iste sed molestias laborum atque, quos reprehenderit fugit cumo!</p>
				</div>
			</div>
		</li>
	</ul>
</div>
		</div>
		
	</div>
</section>
 
    </div>
</section>
</>
  )
}

export default medicines