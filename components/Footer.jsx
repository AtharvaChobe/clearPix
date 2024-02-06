import React from 'react'
import Link from 'next/link'
import { TbMailFilled, TbHeart } from 'react-icons/tb'
const Footer = () => {
    return (
        <div className='bg-black flex items-center justify-evenly w-full mt-20'>
            <Link href={'/'}><h1 className='text-gold font-bold'>ClearPix</h1></Link>
            <a className='text-slate-400' href="mailto:atharvachobe72@gmail.com">For Suggestions : <TbMailFilled className='text-4xl'/></a>
            <h2 className='text-white'>Made with <TbHeart className='text-red-700'/> in India</h2>
        </div>
    )
}

export default Footer