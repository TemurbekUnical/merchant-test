import { Header, Table } from "@/components";
import ClientCard from "../components/ClientCard";
const data = {
   client: { firstName: "Abdurahmon", lastName: "Mamadaliyev" },
   banks: [
      {
         image: {
            src: "https://play-lh.googleusercontent.com/nIm_1qFIlGn7IBsBAS8Tdibf6suQe36WBIuOZqZQ2WNrWgeGMgEYGb0-TfL-cWclv64",
         },
      },
      {
         image: {
            src: "https://play-lh.googleusercontent.com/DNTiwflb38_PxxDLmQxBj9q7ltvvVaVrO4_rvhL7XAXC2V8W01a-LkE3SQqbu2nUMAc",
         },
      },
   ],
   order: {
      updatedAt: "10:20",
   },
};
const Customers = () => {
   return (
      <div className="w-full p-10">
         <Header category="" title="Customers" />
         <div className="w-[calc(100vw-202px)] flex overflow-x-auto scroll-smooth mb-4">
            <div className="flex gap-4">
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
               <ClientCard {...data} />
            </div>
         </div>
         <Table />
      </div>
   );
};

export default Customers;
