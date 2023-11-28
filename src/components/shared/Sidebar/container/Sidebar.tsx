import { IconContext } from "react-icons";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import { Tooltip } from "@/components";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { links } from "@/data/fakeData";

const Sidebar = () => {
     const { currentColor, activeMenu, setActiveMenu, screenSize } =
          useGlobalContext();

     const handleCloseSideBar = () => {
          if (activeMenu !== undefined && (screenSize || 0) <= 900) {
               setActiveMenu(false);
          }
     };

     return (
          <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 border-r border-gray-200">
               {activeMenu && (
                    <>
                         <div className="mt-7">
                              <Link
                                   to="/"
                                   onClick={handleCloseSideBar}
                                   className="m-auto w-11 h-11 rounded-full text-2xl justify-center items-center gap-3 flex font-extrabold tracking-tight dark:text-white text-white"
                                   style={{
                                        background: currentColor,
                                   }}
                              >
                                   {/* <SiShopware /> */}B
                                   {/*  <span>Dashboard</span> */}
                              </Link>
                              <Tooltip
                                   content="Menu"
                                   position="BottomCenter"
                              >
                                   <button
                                        type="button"
                                        onClick={() =>
                                             setActiveMenu(!activeMenu)
                                        }
                                        style={{ color: currentColor }}
                                        className="text-xl rounded-full hover:bg-light-gray mt-4 block md:hidden"
                                   >
                                        <MdOutlineCancel />
                                   </button>
                              </Tooltip>
                         </div>
                         <div className="mt-10">
                              {links.map((item) => (
                                   <div key={item.name} className="flex justify-center mt-6">
                                        {/* <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                             {item.title}
                                        </p> */}
                                        <NavLink
                                             to={`/${item.name}`}
                                             key={item.name}
                                             onClick={handleCloseSideBar}
                                             style={({ isActive }) => ({
                                                  backgroundColor: isActive
                                                       ? currentColor
                                                       : "",
                                             })}
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "flex items-center w-12 h-12 gap-5 pl-[19px] pt-3 pb-[12px]  text-white  text-md rounded-full"
                                                       : "flex items-center w-12 h-12 gap-5 pl-[19px] pt-3 pb-[12px] text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray rounded-full"
                                             }
                                        >
                                             <IconContext.Provider
                                                  value={{
                                                       className:
                                                            "shared-class",
                                                       style: {
                                                            transform:
                                                                 "scale(2.5)",
                                                       },
                                                  }}
                                             >
                                                  <>{item.icon}</>
                                             </IconContext.Provider>
                                             <span className="capitalize ">
                                                  {/* {link.name} */}
                                             </span>
                                        </NavLink>
                                   </div>
                              ))}
                         </div>
                    </>
               )}
          </div>
     );
};

export default Sidebar;
