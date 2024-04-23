import React from "react";

export const Account = () => {

    return (

        <div class="mt-20 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800/5 dark:border-gray-700">
            <h5 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Log in to your account
            </h5>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Access 
                    <strong>Kuotes</strong> to enjoy all our features. Manage your daily life in a very simple way!</p>
            <ul class="my-4 space-y-3">
                <li>
                    <a href="/users/signup" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600/20 dark:hover:bg-gray-800/20 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg> 
                        <span class="flex-1 ms-3 whitespace-nowrap">Sign up</span>
                    </a>
                </li>
                <li>
                    <a href="/users/login" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600/20 dark:hover:bg-gray-800/20 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-key"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" /><path d="M15 9h.01" /></svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Log in</span>
                    </a>
                </li>

            </ul>
        </div>



    );

}
