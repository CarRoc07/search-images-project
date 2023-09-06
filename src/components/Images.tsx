/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext} from 'react'
import Image from './Image';
import Skeleton from './Skeleton';
import { ImgContext } from '@/context/ImgContext';

const Images = () => {
    const { isLoading, response, searchValue } = useContext(ImgContext);

    return (
        <div className='py-4 flex items-center justify-center flex-col'>
            <h1 className='text-2xl font-bold underline opacity-70'>Results for {searchValue}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
                { isLoading ? <Skeleton item={response.length} /> : response.map((item: any, index: any) => (
                    <Image {...item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Images