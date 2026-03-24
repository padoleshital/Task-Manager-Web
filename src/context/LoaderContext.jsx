import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loadingCount, setLoadingCount] = useState(0);

    const showLoader = () => setLoadingCount(prev => prev + 1);
    const hideLoader = () => setLoadingCount(prev => Math.max(0, prev - 1));

    const isLoading = loadingCount > 0;

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
