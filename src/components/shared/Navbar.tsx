import { useEffect } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { Tooltip, UserProfile } from "@/components";
import { useGlobalContext } from "@/contexts/GlobalContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }: any) => (
   <Tooltip content={title} position="BottomCenter">
      <button
         type="button"
         onClick={() => customFunc()}
         style={{ color }}
         className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
         <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
         />
         {icon}
      </button>
   </Tooltip>
);

const Navbar = () => {
   const {
      currentColor,
      handleClick,
      isClicked,
      setScreenSize,
   } = useGlobalContext();

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, []);


   return (
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
         <span></span>
         
         <div className="flex">
            <NavButton
               title="Cart"
               customFunc={() => handleClick("cart")}
               color={currentColor}
               icon={<FiShoppingCart />}
            />
            <NavButton
               title="Chat"
               dotColor="#5E5FF5"
               customFunc={() => handleClick("chat")}
               color={currentColor}
               icon={<BsChatLeft />}
            />
            <NavButton
               title="Notification"
               dotColor="rgb(254, 201, 15)"
               customFunc={() => handleClick("notification")}
               color={currentColor}
               icon={<RiNotification3Line />}
            />
            <Tooltip content="Profile" position="BottomCenter">
               <div
                  className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                  onClick={() => handleClick("userProfile")}
               >
                  {/* <img
                     className="rounded-full w-8 h-8"
                     src={avatar}
                     alt="user-profile"
                  /> */}
                  <p>
                     <span className="text-gray-400 text-14">Hi,</span>{" "}
                     <span className="text-gray-400 font-bold ml-1 text-14">
                        Temurbek
                     </span>
                  </p>
                  <MdKeyboardArrowDown className="text-gray-400 text-14" />
               </div>
            </Tooltip>

            {/* {isClicked.cart && <Cart />} */}
            {/* {isClicked.chat && <Chat />} */}
            {/* {isClicked.notification && <Notification />} */}
            {isClicked.userProfile && <UserProfile />}
         </div>
      </div>
   );
};

export default Navbar;
