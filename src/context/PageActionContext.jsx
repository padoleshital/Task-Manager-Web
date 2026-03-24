import React, { createContext, useContext, useState } from 'react';

const PageActionContext = createContext();

export const PageActionProvider = ({ children }) => {
    // Current active callback for the "Global Add Button"
    const [action, setAction] = useState(null);

    return (
        <PageActionContext.Provider value={{ action, setAction }}>
            {children}
        </PageActionContext.Provider>
    );
};

export const usePageAction = () => useContext(PageActionContext);
