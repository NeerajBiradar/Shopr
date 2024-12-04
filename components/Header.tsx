"use client"

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link";
import Form from 'next/form';
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/app/(store)/store";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  )


  return (
    <header className="flex flex-wrap justify-between items-center px-2 py-2">
      {/* top row */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500 
        hover:opacity-50 cursor-pointer mx-auto sm:mx-0"> Shopr</Link>

        <Form action="/search" className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
          <input name="query" className="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search for products" />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* Will have global count soon */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-x5">{itemCount}</span>
            <span>My Basket</span>
          </Link>


          {/* user area */}
          <ClerkLoaded>
            {user && (<Link
              href="/orders"
              className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>)}

            {user ? (
              <div className="flex items-center space-x-2 ">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}


          </ClerkLoaded>
        </div>
      </div>
    </header>
  )
}

export default Header