import { FaPlus } from "react-icons/fa6";

const Header = ({ category, title }: { category: string; title: string }) => {
   console.log(category);

   return (
      <div className=" mb-10 flex justify-between ">
         <p className="text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
         </p>
         <button className="py-2 px-3 text-base bg-main text-white rounded-lg inline-flex items-center gap-2">
            <FaPlus /> Mijoz qo`shish
         </button>
      </div>
   );
};

export default Header;
