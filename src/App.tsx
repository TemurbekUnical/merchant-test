import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Navbar, Sidebar, ThemeSettings } from "./components";
import {
     Calendar,
     ColorPicker,
     Customers,
     Ecommerce,
     Employees,
     Kanban,
     Orders,
} from "./pages";

import { useGlobalContext } from "./contexts/GlobalContext";
import { TTheme } from "./types/types.common";

const App = () => {
     const {
          setCurrentColor,
          setCurrentMode,
          currentMode,
          currentColor,
          themeSettings,
          activeMenu,
          setThemeSettings,
     } = useGlobalContext();

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
                         <div
                              className="fixed right-4 bottom-4"
                              style={{ zIndex: "1000" }}
                         >
                              <TooltipComponent
                                   content="Settings"
                                   position="TopCenter"
                              >
                                   <button
                                        type="button"
                                        onClick={() => setThemeSettings(true)}
                                        style={{
                                             background: currentColor,
                                             borderRadius: "50%",
                                        }}
                                        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                   >
                                        <FiSettings />
                                   </button>
                              </TooltipComponent>
                         </div>
                         {/* <Sidebar>
                              {links.map((link) => (
                                   <SidebarItem
                                        key={link.name}
                                        active={true}
                                        icon={link.icon}
                                        text={link.name}
                                   />
                              ))}
                         </Sidebar> */}
                         {activeMenu ? (
                              <div className="w-28 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                                   <Sidebar />
                              </div>
                         ) : (
                              <div className="w-0 dark:bg-secondary-dark-bg">
                                   <Sidebar />
                              </div>
                         )}
                         <div
                              className={
                                   activeMenu
                                        ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-28 w-full  "
                                        : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                              }
                         >
                              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                                   <Navbar />
                              </div>
                              <div>
                                   {themeSettings && <ThemeSettings />}

                                   <Routes>
                                        {/* dashboard  */}
                                        <Route
                                             path="/"
                                             element={<Ecommerce />}
                                        />
                                        <Route
                                             path="/ecommerce"
                                             element={<Ecommerce />}
                                        />

                                        {/* pages  */}
                                        <Route
                                             path="/orders"
                                             element={<Orders />}
                                        />
                                        <Route
                                             path="/employees"
                                             element={<Employees />}
                                        />
                                        <Route
                                             path="/customers"
                                             element={<Customers />}
                                        />

                                        {/* apps  */}
                                        <Route
                                             path="/kanban"
                                             element={<Kanban />}
                                        />
                                        <Route
                                             path="/calendar"
                                             element={<Calendar />}
                                        />
                                        <Route
                                             path="/color-picker"
                                             element={<ColorPicker />}
                                        />
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
