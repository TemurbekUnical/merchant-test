interface ITabs {
   activeId: string;
   tabs: {
      title: string;
      onClick: () => void;
      id: string;
   }[];
}

const Tabs = ({ tabs, activeId }: ITabs) => {
   return (
      <div>
         <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map((tab, index) => {
               const classes =
                  activeId === tab.id
                     ? "border bg-gray-100 rounded-lg active"
                     : "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white";
               return (
                  <li
                     className="me-2"
                     onClick={() => tab.onClick()}
                     key={tab.title + index}
                  >
                     <span
                        className={
                           "inline-block px-4 py-2 font-semibold cursor-pointer " + classes
                        }
                        aria-current="page"
                     >
                        {tab.title}
                     </span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Tabs;
