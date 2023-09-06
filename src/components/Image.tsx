/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'

interface ImageData {
    urls: {
        regular: string;
        small: string;
    } | undefined;
    alt_description: string | undefined;
}

const Image: React.FC<ImageData> = ( data ) => {
    return (
        <a href={data.urls?.regular} target='_blank' rel='noreferrer'>
            <img src={data.urls?.small} alt={data.alt_description} className='h-72 w-full object-cover rounded-lg shadow-lg'/>
        </a>
    )
}

export default Image