import { LuChevronFirst, LuMoreVertical, LuChevronLast } from "react-icons/lu";
import { useGlobalContext } from "@/contexts/GlobalContext";
// import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";

export default function Sidebar({ children }: any) {
     const { setActiveMenu, activeMenu } = useGlobalContext();
     return (
          <aside className="h-screen">
               <nav
                    className={
                         `h-full flex flex-col bg-white border-r shadow-sm`
                    }
               >
                    <div className="p-4 pb-2 flex justify-between items-center">
                         <img
                              src="https://img.logoipsum.com/243.svg"
                              className={`overflow-hidden transition-all ${
                                   activeMenu ? "w-32" : "w-0"
                              }`}
                              alt=""
                         />
                         <button
                              onClick={() => setActiveMenu((curr) => !curr)}
                              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                         >
                              {activeMenu ? (
                                   <LuChevronFirst />
                              ) : (
                                   <LuChevronLast />
                              )}
                         </button>
                    </div>

                    <ul className="flex-1 px-3">{children}</ul>

                    <div className="border-t flex p-3">
                         <img
                              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                              alt=""
                              className="w-10 h-10 rounded-md"
                         />
                         <div
                              className={
                                   "flex justify-between items-center overflow-hidden transition-all " +
                                   activeMenu
                                        ? "w-52 ml-3"
                                        : "w-0"
                              }
                         >
                              <div className="leading-4">
                                   <h4 className="font-semibold">John Doe</h4>
                                   <span className="text-xs text-gray-600">
                                        johndoe@gmail.com
                                   </span>
                              </div>
                              <LuMoreVertical size={20} />
                         </div>
                    </div>
               </nav>
          </aside>
     );
}

export function SidebarItem({
     icon,
     text,
     active,
     alert,
}: {
     icon: React.ReactNode;
     text: string;
     active: boolean;
     alert?: boolean;
}) {
     const { activeMenu } = useGlobalContext();
     return (
          <li
               className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
             active
                  ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
        }
    `}
          >
               {icon}
               <span
                    className={`overflow-hidden transition-all ${
                         activeMenu ? "w-52 ml-3" : "w-0"
                    }`}
               >
                    {text}
               </span>
               {alert && (
                    <div
                         className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                              activeMenu ? "" : "top-2"
                         }`}
                    />
               )}

               {!activeMenu && (
                    <div
                         className={`
                              w-10 absolute left-full rounded-md px-2 py-1 ml-6
                              bg-indigo-100 text-indigo-800 text-sm
                              invisible opacity-20 -translate-x-3 transition-all
                              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                         `}
                    >
                         {text}
                    </div>
               )}
          </li>
     );
}
