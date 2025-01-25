"use client";

import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/lib/firebase/auth'; // Update your auth imports
import { useState } from 'react';
import Head from 'next/head';

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleLoginWithGoogle = async () => {
        try {
            const result = await signInWithGoogle();

            if (result.isAdmin) {
                // If the user is an admin, redirect to the admin route
                router.push('/admin');
            } else {
                // Non-admin users are redirected to the home page
                router.push('/');
            }
        } catch (err) {
            console.error('Failed to log in with Google:', err);
            setError('Failed to log in with Google');
        }
    };





    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head>
                <title>Login Page</title>
            </Head>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Login to Your Account
                </h2>

                {error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
                        {error}
                    </div>
                )}
                <div className="space-y-4">
                    <button
                        onClick={handleLoginWithGoogle}
                        className="flex items-center justify-center w-full px-4 py-2 space-x-4 text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <span>Login with Google</span>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default LoginPage;
