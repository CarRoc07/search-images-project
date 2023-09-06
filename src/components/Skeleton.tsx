import React from 'react'

const Skeleton = ( {item} ) => {
    return Array.from({length: item}, (_, i) => (
        <div key={i} className="animate-pulse">
            <div className='bg-gray-600 rounded-lg h-72 w-64'></div>
        </div>
    ))
}

export default Skeleton;