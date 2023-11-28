import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Sidebar } from "./components";
import { Customers, Ecommerce } from "./pages";

import { useGlobalContext } from "./contexts/GlobalContext";
import { TTheme } from "./types/types.common";

const App = () => {
   const { setCurrentColor, setCurrentMode, currentMode } = useGlobalContext();

   useEffect(() => {
      const currentThemeColor = localStorage.getItem("colorMode");
      const currentThemeMode = localStorage.getItem("themeMode");
      if (currentThemeColor && currentThemeMode) {
         setCurrentColor(currentThemeColor);
         setCurrentMode(currentThemeMode as TTheme);
      }
   }, []);

   return (
      <div className={currentMode === "Dark" ? "dark" : ""}>
         <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
               <div className="w-28 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
               </div>
               <div
                  className={
                     "dark:bg-main-dark-bg bg-main-bg w-full min-h-screen md:ml-28 "
                  }
               >
                  <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full my-6">
                     {/* <Navbar /> */}
                  </div>
                  <div>
                     {/* {themeSettings && <ThemeSettings />} */}

                     <Routes>
                        {/* dashboard  */}
                        <Route path="/" element={<Customers />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />

                        {/* pages  */}
                        <Route path="/customers" element={<Customers />} />

                        {/* apps  */}
                     </Routes>
                  </div>
                  <Footer />
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
};

export default App;
