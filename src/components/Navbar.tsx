'use client'
import { ImgContext } from '@/context/ImgContext'
import React, { useContext } from 'react'

const Navbar = () => {
    const { searchValue, fetchData, setSearchValue } = useContext(ImgContext)

    const handleSearch = async () => {
        if (searchValue) {
            await fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${process.env.NEXT_PUBLIC_KEY}`);
        }
    };
    
    const handleKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchValue) {
            await handleSearch();
        }
    };

    return (
        <nav className='bg-gray-900 flex items-center py-6 flex-col gap-3 text-white'>
            <h2 className='text-3xl font-bold'>Find images</h2>
            <div>
                <input type="text" 
                className='bg-gray-100 border-3 border-gray-300 text-black text-md outline-none indent-2 p-3 rounded-tl rounded-bl' 
                autoFocus
                placeholder='Search...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button className='bg-indigo-500 border-1 p-3 font-bold rounded-br rounded-tr hover:bg-indigo-700 disabled:bg-gray-400' disabled={!searchValue} onClick={handleSearch}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar