import React from 'react'
import Image from 'next/image'
import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3 } from "react-icons/tb";
const Steps = () => {
    return (
        <div className='flex items-center justify-center h-full md:h-[90vh] flex-wrap md:flex-nowrap bg-gold px-6 w-10/12 rounded-xl'>
            <div className='w-full md:w-2/3'>
                <h1 className='font-bold text-5xl'>How to remove Background?</h1>
                <ul className='flex flex-col gap-4'>
                    <li className='flex flex-col'>
                        <div className='flex flex-row font-bold text-xl gap-2'>
                            <TbCircleDashedNumber1 />
                            <h3>Upload the Image</h3>
                        </div>
                        <p className='text-lg ml-7'>Upload a JPG, PNG or HEIC file. <br /> Try to choose an image where the subject has clear edges.</p>
                    </li>
                    <li className='flex flex-col'>
                        <div className='flex flex-row font-bold text-xl gap-2'>
                            <TbCircleDashedNumber2 />
                            <h3>Automatically remove the background online</h3>
                        </div>
                        <p className='text-lg ml-7'>ClearPix will remove the background of the image.</p>
                    </li>
                    <li className='flex flex-col'>
                        <div className='flex flex-row font-bold text-xl gap-2'>
                            <TbCircleDashedNumber3 />
                            <h3>Download or save the Image as PNG</h3>
                        </div>
                        <p className='text-lg ml-7'>Download the Image and use it.</p>
                    </li>

                </ul>
            </div>

            <div>
                <Image className='overflow-hidden rounded-md shadow-lg' src={'/steps.jpg'} height={400} width={300} alt='clearPix-steps' />
            </div>
        </div>
    )
}

export default Steps