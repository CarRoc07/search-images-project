'use client'
import axios from "axios";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface ImgContextType {
    response: any[];
    isLoading: boolean;
    error: any;
    fetchData: (url: string) => Promise<void>;
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const ImgContext = createContext<ImgContextType>({
    response: [],
    isLoading: false,
    error: null,
    fetchData: async () => {},
    searchValue: '',
    setSearchValue: () => {}
});

interface ImgProviderProps {
    children: ReactNode;
}

export const ImgProvider: React.FC <ImgProviderProps>= ({ children }) => {
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchValue, setSearchValue] = useState('')

    axios.defaults.baseURL = 'https://api.unsplash.com'

    const fetchData = async (url: string) => {
        try {
            setIsLoading(true)
            const res = await axios.get(url)
            setResponse(res.data.results)
            } catch (error: any) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }  

    useEffect(() => {
        if (searchValue) {
            fetchData(`/search/photos?page=1&query=${searchValue}&client_id=2fdpJDwv_CLQZkxAHhAb16SYrTt-GJ02TH-KyeDJGto`)
        } else {
            fetchData('/search/photos?page=1&query=cats&client_id=2fdpJDwv_CLQZkxAHhAb16SYrTt-GJ02TH-KyeDJGto')
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])


    return (
        <ImgContext.Provider value={{response, isLoading, error, fetchData, searchValue, setSearchValue}} >
            {children}
        </ImgContext.Provider>
    )
}