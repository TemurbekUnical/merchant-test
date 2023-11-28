import React, { createContext, useContext, useState } from "react";
import { TTheme } from "../types/types.common";

const StateContext = createContext<any>({});

const initialState = {
     chat: false,
     cart: false,
     userProfile: false,
     notification: false,
};

const useGlobal = () => {
     const [screenSize, setScreenSize] = useState<number>();
     const [currentColor, setCurrentColor] = useState("#5E5FF5");
     const [currentMode, setCurrentMode] = useState<TTheme>("Light");
     const [themeSettings, setThemeSettings] = useState(false);
     const [activeMenu, setActiveMenu] = useState(true);
     const [isClicked, setIsClicked] = useState(initialState);

     

     //  temp any
     const setMode = (e: any) => {
          setCurrentMode(e.target.value);
          localStorage.setItem("themeMode", e.target.value);
     };

     //  temp any
     const setColor = (color: any) => {
          setCurrentColor(color);
          localStorage.setItem("colorMode", color);
     };

     //  temp any
     const handleClick = (clicked: any) =>
          setIsClicked({ ...initialState, [clicked]: true });

     return {
          currentColor,
          currentMode,
          activeMenu,
          screenSize,
          isClicked,
          initialState,
          themeSettings,

          setScreenSize,
          handleClick,
          setIsClicked,
          setActiveMenu,
          setCurrentColor,
          setCurrentMode,
          setMode,
          setColor,
          setThemeSettings,
     };
};

export const ContextProvider = ({
     children,
}: {
     children: React.ReactNode;
}) => {
     const contextValue = useGlobal();
     return (
          <StateContext.Provider value={contextValue}>
               {children}
          </StateContext.Provider>
     );
};

export const useGlobalContext = () =>
     useContext<ReturnType<typeof useGlobal>>(StateContext);
