'use client'
import GetData from '@/components/GetData'
import Hero from '@/components/Hero'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Steps from '@/components/Steps'
const page = () => {
  return (
    <>
      <div className='flex flex-col items-center '>
        <Hero />
        <SignedIn>
          <GetData />
        </SignedIn>

        <SignedOut>
          <Steps/>
        </SignedOut>
      </div>
    </>
  )
}

export default page