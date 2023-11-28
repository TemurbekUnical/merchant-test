interface IStatus {
   status?: "new" | "completed" | "canceled";
   className?: string;
}
const Status = ({ status = "new", className }: IStatus) => {
   let color = "";
   if (status === "new") {
      color = "bg-blue-100 text-blue-700 text-main";
   }
   return (
      <span
         className={
            "inline-flex items-center px-2 py-1 text-xs font-semibold capitalize rounded-[30px] text-xs " +
            color +
            ` ${className}`
         }
      >
         {status}
      </span>
   );
};

export default Status;
