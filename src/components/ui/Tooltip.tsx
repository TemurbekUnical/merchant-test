import React, { ReactNode } from "react";

interface TooltipProps {
   content: string;
   children: ReactNode;
   position: any;
   //   position: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
   content,
   children,
   position = "top",
}) => {
   const getPositionStyles = () => {
      switch (position) {
         case "top":
            return "bottom-full left-1/2 transform -translate-x-1/2";
         case "bottom":
            return "top-full left-1/2 transform -translate-x-1/2";
         case "left":
            return "top-1/2 right-full transform -translate-y-1/2";
         case "right":
            return "top-1/2 left-full transform -translate-y-1/2";
         default:
            return "";
      }
   };

   return (
      <div className="relative inline-block">
         <div className="group relative">
            {children}
            <div
               className={`hidden group-hover:block absolute z-10 bg-gray-800 text-white text-sm px-2 py-1 rounded-md ${getPositionStyles()}`}
            >
               {content}
            </div>
         </div>
      </div>
   );
};
export default Tooltip;
