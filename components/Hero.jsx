import React from 'react'
import { SignedOut } from '@clerk/nextjs';
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mx-auto mt-12 h-[100vh] md:h-[80vh]'>

                <div className='flex flex-col pl-5 justify-center'>
                    <h1 className='text-3xl md:text-5xl font-semibold leading-relaxed'>
                        Remove the <span className='bg-black text-gold px-2 py-1 rounded-md'>background</span> of the products
                        in just <span className='bg-black text-gold px-2 py-1 rounded-md'>one click</span> 
                    </h1>
                    <SignedOut>
                        <Link href={'/sign-up'} className='bg-gold rounded-md px-3 py-2 w-1/2 md:w-1/4 text-center shadow-md hover:shadow-lg font-bold'>Try it out!</Link>
                    </SignedOut>
                    
                </div>
                <div className='flex items-center justify-center mx-3'>
                    <Image className='shadow-lg rounded-lg my-3 md:mx-0 md:my-0' height={400} width={500} src={'/hero.png'} alt='hero image'/>
                </div>
            </div>
        </>
    )
}

export default Hero