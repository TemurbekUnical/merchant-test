import { Image, Status } from "@/components";

interface IClientCard {
   client: {
      firstName: string;
      lastName: string;
   };
   banks: {
      image: {
         src: string;
      };
   }[];
   order: {
      updatedAt: string;
   };
}

const ClientCard = ({ client, banks, order }: IClientCard) => {
   return (
      <div className="w-[256px] min-h-[110px] border border-gray-200 rounded-lg p-3 bg-slate-50">
         <div className="flex justify-between">
            <div>
               <span className="text-gray-400 text-xs">Client</span>
               <p className="text-base font-semibold">
                  {client?.firstName || "Client"}{" "}
                  {client?.lastName?.at(0) || ""}.
               </p>
            </div>
            <div className="flex -space-x-2 overflow-hidden">
               {banks.map((bank, i) => (
                  <Image
                     key={bank.image.src}
                     src={bank.image.src}
                     className={`w-5 h-5 inline-block rounded-full ring-1 ring-white`}
                     style={{
                        zIndex: banks.length - i,
                     }}
                  />
               ))}
            </div>
         </div>
         <div className="flex items-center my-[10px]">
            <Status className="mr-1" />
            <span className="text-gray-400 text-xs">
               {order.updatedAt} da yangilandi
            </span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
               className="bg-blue-600 h-1.5 rounded-full"
               style={{
                  width: "45%",
               }}
            ></div>
         </div>
      </div>
   );
};

export default ClientCard;
