import React from 'react';
import TaskIcon from '../../icons/TaskIcon';
import CalendarIcon from '../../icons/CalendarIcon';

function LandingPage() {
  return (
    <div className="max-w-[1240px] mx-auto leading-normal tracking-normal text-indigo-400 " style={{ backgroundImage: 'url(header.png)' }}>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center gap-x-12">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden mx-auto">
          <h1 className="my-4 text-3xl md:text-5xl dark:text-gray-100 text-gray-900 opacity-75 font-bold leading-tight text-center md:text-left">
            Welcome again to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00df9a] dark:via-gray-200 via-gray-400 to-gray-400 dark:to-gray-600">
              Kuotes!
            </span>
            {' '}
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-gray-400 dark:text-gray-500">
            Organize your tasks and quotes in a very simple way.
          </p>
        </div>

        <div className="w-full xl:w-2/5 overflow-hidden mx-auto">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-[#25252f] dark:border-gray-700">
            <h5 class="text-center mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Our features
            </h5>
            <ul class="my-4 space-y-3">
              <li>
                <a href="../quotes/show" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <TaskIcon width="24" height="24" className="" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Show your quotes</span>
                </a>
              </li>
              <li>
                <a href="/quotes/calendar" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <CalendarIcon width="24" height="24" className="" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Calendar</span>
                </a>
              </li>

            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default LandingPage;
