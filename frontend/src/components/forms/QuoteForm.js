
const QuoteForm = () => {   

    return(
        <div className="grid items-right gap-x-4 p-4 px-2 py-2 mt-5 ">
           <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Title *
                        </label>
                        <input class="text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field" id="grid-first-name" type="text" placeholder="A title"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="text-gray-900 text-xs font-bold mb-2 dark:text-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Importance
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field" id="grid-state">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-gray-200 text-gray-700">
                        <svg class="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Date *
                        </label>
                        <input class="text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" for="grid-last-name">
                            Hour *
                        </label>
                        <input class="text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-200" for="grid-password">
                    Description 
                </label>
                <textarea className="resize-none appearance-none block w-full  py-3 px-4 mb-3 text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field " id="grid-password" placeholder="Enter the description here..."></textarea>
                </div>
             </div>
            </form>
        </div>

      
    );
};


export default QuoteForm;