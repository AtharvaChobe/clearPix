import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { SignInButton, SignedIn, SignedOut, SignUpButton, SignOutButton } from "@clerk/nextjs";
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs';

const Navbar = async () => {
    const user = await currentUser();
    return (
        <div>
            <nav className='flex w-full items-center border-b shadow-sm justify-around bg-black flex-wrap py-3 md:py-0'>
                <Link href={'/'}><h1 className='text-gold font-bold'>ClearPix</h1></Link>

                <SignedIn>
                    <div className='flex flex-row gap-5 items-center justify-around text-gold'>
                        {/* <SignOutButton className='text-black bg-white rounded-md px-3 py-2 hover:bg-gold' /> */}
                       <h2 className='text-lg'>Hello {user?.firstName}!</h2> 
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </SignedIn>

                <SignedOut afterSignOutUrl='/'>
                    <div className='flex gap-12'>
                        <SignInButton className='text-black bg-white rounded-md px-3 py-2 hover:bg-gold' />
                        <SignUpButton className='text-black bg-white rounded-md px-3 py-2 hover:bg-gold' />
                    </div>
                </SignedOut>
            </nav>
        </div>
    )
}

export default Navbar