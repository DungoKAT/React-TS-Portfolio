import React, { createContext, useContext, useState } from 'react';

type StateContextType = {
    lightTheme: boolean;
    setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
    null as unknown as StateContextType,
);

export const MyStateContext = () => {
    return useContext(StateContext)
}

type ContextProviderProps = {
    children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [lightTheme, setLightTheme] = useState(false);

    const value = {
        lightTheme,
        setLightTheme,
    };

    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
};