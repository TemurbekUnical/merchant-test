import { TSidebarLink } from "@/types/types.common";
import {
   BsBoxSeam,
   BsChatLeft,
   BsCurrencyDollar,
   BsShield,
} from "react-icons/bs";
import {
   FiBarChart,
   FiCreditCard,
   FiShoppingBag,
   FiShoppingCart,
   FiStar,
} from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineSupervisorAccount } from "react-icons/md";
// import { RiContactsLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";

import { TiTick } from "react-icons/ti";

export const links: TSidebarLink[] = [
   {
      name: "customers",
      icon: <HiOutlineUserGroup />,
   },
   {
      name: "ecommerce",
      icon: <FiShoppingBag />,
   },
   {
      name: "employees",
      icon: <IoMdContacts />,
   },
];
export const gridOrderImage = (props: any) => (
   <div>
      <img
         className="rounded-xl h-20 md:ml-3"
         src={props.ProductImage}
         alt="order-item"
      />
   </div>
);

export const gridOrderStatus = (props: any) => (
   <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
   >
      {props.Status}
   </button>
);

export const kanbanGrid = [
   { headerText: "To Do", keyField: "Open", allowToggle: true },

   { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

   {
      headerText: "Testing",
      keyField: "Testing",
      allowToggle: true,
      isExpanded: false,
   },

   { headerText: "Done", keyField: "Close", allowToggle: true },
];
const gridEmployeeProfile = (props: any) => (
   <div className="flex items-center gap-2">
      <img
         className="rounded-full w-10 h-10"
         src={props.EmployeeImage}
         alt="employee"
      />
      <p>{props.Name}</p>
   </div>
);

const gridEmployeeCountry = (props: any) => (
   <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
   </div>
);

const customerGridImage = (props: any) => (
   <div className="image flex gap-4">
      <img
         className="rounded-full w-10 h-10"
         src={props.CustomerImage}
         alt="employee"
      />
      <div>
         <p>{props.CustomerName}</p>
         <p>{props.CustomerEmail}</p>
      </div>
   </div>
);

const customerGridStatus = (props: any) => (
   <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p
         style={{ background: props.StatusBg }}
         className="rounded-full h-3 w-3"
      />
      <p>{props.Status}</p>
   </div>
);
export const areaPrimaryXAxis = {
   valueType: "DateTime",
   labelFormat: "y",
   majorGridLines: { width: 0 },
   intervalType: "Years",
   edgeLabelPlacement: "Shift",
   labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
   labelFormat: "{value}%",
   lineStyle: { width: 0 },
   maximum: 4,
   interval: 1,
   majorTickLines: { width: 0 },
   minorTickLines: { width: 0 },
   labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
   valueType: "Category",
   interval: 1,
   majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
   majorGridLines: { width: 0 },
   majorTickLines: { width: 0 },
   lineStyle: { width: 0 },
   labelStyle: { color: "transparent" },
};
const areaChartData = [
   [
      { x: new Date(2002, 0, 1), y: 2.2 },
      { x: new Date(2003, 0, 1), y: 3.4 },
      { x: new Date(2004, 0, 1), y: 2.8 },
      { x: new Date(2005, 0, 1), y: 1.6 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 2.5 },
      { x: new Date(2008, 0, 1), y: 2.9 },
      { x: new Date(2009, 0, 1), y: 3.8 },
      { x: new Date(2010, 0, 1), y: 1.4 },
      { x: new Date(2011, 0, 1), y: 3.1 },
   ],
   [
      { x: new Date(2002, 0, 1), y: 2 },
      { x: new Date(2003, 0, 1), y: 1.7 },
      { x: new Date(2004, 0, 1), y: 1.8 },
      { x: new Date(2005, 0, 1), y: 2.1 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 1.7 },
      { x: new Date(2008, 0, 1), y: 1.5 },
      { x: new Date(2009, 0, 1), y: 2.8 },
      { x: new Date(2010, 0, 1), y: 1.5 },
      { x: new Date(2011, 0, 1), y: 2.3 },
   ],
   [
      { x: new Date(2002, 0, 1), y: 0.8 },
      { x: new Date(2003, 0, 1), y: 1.3 },
      { x: new Date(2004, 0, 1), y: 1.1 },
      { x: new Date(2005, 0, 1), y: 1.6 },
      { x: new Date(2006, 0, 1), y: 2 },
      { x: new Date(2007, 0, 1), y: 1.7 },
      { x: new Date(2008, 0, 1), y: 2.3 },
      { x: new Date(2009, 0, 1), y: 2.7 },
      { x: new Date(2010, 0, 1), y: 1.1 },
      { x: new Date(2011, 0, 1), y: 2.3 },
   ],
];
export const areaCustomSeries = [
   {
      dataSource: areaChartData[0],
      xName: "x",
      yName: "y",
      name: "USA",
      opacity: "0.8",
      type: "SplineArea",
      width: "2",
   },
   {
      dataSource: areaChartData[1],
      xName: "x",
      yName: "y",
      name: "France",
      opacity: "0.8",
      type: "SplineArea",
      width: "2",
   },
   {
      dataSource: areaChartData[2],
      xName: "x",
      yName: "y",
      name: "Germany",
      opacity: "0.8",
      type: "SplineArea",
      width: "2",
   },
];
export const barChartData = [
   [
      { x: "USA", y: 46 },
      { x: "GBR", y: 27 },
      { x: "CHN", y: 26 },
   ],
   [
      { x: "USA", y: 37 },
      { x: "GBR", y: 23 },
      { x: "CHN", y: 18 },
   ],
   [
      { x: "USA", y: 38 },
      { x: "GBR", y: 17 },
      { x: "CHN", y: 26 },
   ],
];

export const barCustomSeries = [
   {
      dataSource: barChartData[0],
      xName: "x",
      yName: "y",
      name: "Gold",
      type: "Column",
      marker: {
         dataLabel: {
            visible: true,
            position: "Top",
            font: { fontWeight: "600", color: "#ffffff" },
         },
      },
   },
   {
      dataSource: barChartData[1],
      xName: "x",
      yName: "y",
      name: "Silver",
      type: "Column",
      marker: {
         dataLabel: {
            visible: true,
            position: "Top",
            font: { fontWeight: "600", color: "#ffffff" },
         },
      },
   },
   {
      dataSource: barChartData[2],
      xName: "x",
      yName: "y",
      name: "Bronze",
      type: "Column",
      marker: {
         dataLabel: {
            visible: true,
            position: "Top",
            font: { fontWeight: "600", color: "#ffffff" },
         },
      },
   },
];
export const colorMappingData = [
   [
      { x: "Jan", y: 6.96 },
      { x: "Feb", y: 8.9 },
      { x: "Mar", y: 12 },
      { x: "Apr", y: 17.5 },
      { x: "May", y: 22.1 },
      { x: "June", y: 25 },
      { x: "July", y: 29.4 },
      { x: "Aug", y: 29.6 },
      { x: "Sep", y: 25.8 },
      { x: "Oct", y: 21.1 },
      { x: "Nov", y: 15.5 },
      { x: "Dec", y: 9.9 },
   ],
   ["#FFFF99"],
   ["#FFA500"],
   ["#FF4040"],
];

export const rangeColorMapping = [
   {
      label: "1°C to 10°C",
      start: "1",
      end: "10",
      colors: colorMappingData[1],
   },

   {
      label: "11°C to 20°C",
      start: "11",
      end: "20",
      colors: colorMappingData[2],
   },

   {
      label: "21°C to 30°C",
      start: "21",
      end: "30",
      colors: colorMappingData[3],
   },
];

export const ColorMappingPrimaryXAxis = {
   valueType: "Category",
   majorGridLines: { width: 0 },
   title: "Months",
};

export const ColorMappingPrimaryYAxis = {
   lineStyle: { width: 0 },
   majorTickLines: { width: 0 },
   minorTickLines: { width: 0 },
   labelFormat: "{value}°C",
   title: "Temperature",
};

export const FinancialPrimaryXAxis = {
   valueType: "DateTime",
   minimum: new Date("2016, 12, 31"),
   maximum: new Date("2017, 9, 30"),
   crosshairTooltip: { enable: true },
   majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
   title: "Price",
   minimum: 100,
   maximum: 180,
   interval: 20,
   lineStyle: { width: 0 },
   majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
   valueType: "DateTime",
   labelFormat: "y",
   intervalType: "Years",
   edgeLabelPlacement: "Shift",
   majorGridLines: { width: 0 },
   background: "white",
} as const;

export const LinePrimaryYAxis = {
   labelFormat: "{value}%",
   rangePadding: "None",
   minimum: 0,
   maximum: 100,
   interval: 20,
   lineStyle: { width: 0 },
   majorTickLines: { width: 0 },
   minorTickLines: { width: 0 },
} as const;

export const customersGrid = [
   { type: "checkbox", width: "50" },
   {
      headerText: "Name",
      width: "150",
      template: customerGridImage,
      textAlign: "Center",
   },
   {
      field: "ProjectName",
      headerText: "Project Name",
      width: "150",
      textAlign: "Center",
   },
   {
      field: "Status",
      headerText: "Status",
      width: "130",
      format: "yMd",
      textAlign: "Center",
      template: customerGridStatus,
   },
   {
      field: "Weeks",
      headerText: "Weeks",
      width: "100",
      format: "C2",
      textAlign: "Center",
   },
   {
      field: "Budget",
      headerText: "Budget",
      width: "100",
      format: "yMd",
      textAlign: "Center",
   },

   {
      field: "Location",
      headerText: "Location",
      width: "150",
      textAlign: "Center",
   },

   {
      field: "CustomerID",
      headerText: "Customer ID",
      width: "120",
      textAlign: "Center",
      isPrimaryKey: true,
   },
];

export const employeesGrid = [
   {
      headerText: "Employee",
      width: "150",
      template: gridEmployeeProfile,
      textAlign: "Center",
   },
   { field: "Name", headerText: "", width: "0", textAlign: "Center" },
   {
      field: "Title",
      headerText: "Designation",
      width: "170",
      textAlign: "Center",
   },
   {
      headerText: "Country",
      width: "120",
      textAlign: "Center",
      template: gridEmployeeCountry,
   },

   {
      field: "HireDate",
      headerText: "Hire Date",
      width: "135",
      format: "yMd",
      textAlign: "Center",
   },

   {
      field: "ReportsTo",
      headerText: "Reports To",
      width: "120",
      textAlign: "Center",
   },
   {
      field: "EmployeeID",
      headerText: "Employee ID",
      width: "125",
      textAlign: "Center",
   },
];


export const earningData = [
   {
      icon: <MdOutlineSupervisorAccount />,
      amount: "39,354",
      percentage: "-4%",
      title: "Customers",
      iconColor: "#5E5FF5",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
   },
   {
      icon: <BsBoxSeam />,
      amount: "4,396",
      percentage: "+23%",
      title: "Products",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
   },
   {
      icon: <FiBarChart />,
      amount: "423,39",
      percentage: "+38%",
      title: "Sales",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",

      pcColor: "green-600",
   },
   {
      icon: <HiOutlineRefresh />,
      amount: "39,354",
      percentage: "-12%",
      title: "Refunds",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
   },
];

export const recentTransactions = [
   {
      icon: <BsCurrencyDollar />,
      amount: "+$350",
      title: "Paypal Transfer",
      desc: "Money Added",
      iconColor: "#5E5FF5",
      iconBg: "#E5FAFB",
      pcColor: "green-600",
   },
   {
      icon: <BsShield />,
      amount: "-$560",
      desc: "Bill Payment",
      title: "Wallet",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
   },
   {
      icon: <FiCreditCard />,
      amount: "+$350",
      title: "Credit Card",
      desc: "Money reversed",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",

      pcColor: "green-600",
   },
   {
      icon: <TiTick />,
      amount: "+$350",
      title: "Bank Transfer",
      desc: "Money Added",

      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      pcColor: "green-600",
   },
   {
      icon: <BsCurrencyDollar />,
      amount: "-$50",
      percentage: "+38%",
      title: "Refund",
      desc: "Payment Sent",
      iconColor: "#5E5FF5",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
   },
];

export const weeklyStats = [
   {
      icon: <FiShoppingCart />,
      amount: "-$560",
      title: "Top Sales",
      desc: "Johnathan Doe",
      iconBg: "#FB9678",
      pcColor: "red-600",
   },
   {
      icon: <FiStar />,
      amount: "-$560",
      title: "Best Seller",
      desc: "MaterialPro Admin",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "red-600",
   },
   {
      icon: <BsChatLeft />,
      amount: "+$560",
      title: "Most Commented",
      desc: "Ample Admin",
      iconBg: "#00C292",
      pcColor: "green-600",
   },
];

export const medicalproBranding = {
   data: [
      {
         title: "Due Date",
         desc: "Oct 23, 2021",
      },
      {
         title: "Budget",
         desc: "$98,500",
      },
      {
         title: "Expense",
         desc: "$63,000",
      },
   ],
   teams: [
      {
         name: "Bootstrap",
         color: "orange",
      },
      {
         name: "Angular",
         color: "#FB9678",
      },
   ],
};

export const themeColors = [
   {
      name: "blue-theme",
      color: "#5E5FF5",
   },
   {
      name: "green-theme",
      color: "#5E5FF5",
   },
   {
      name: "purple-theme",
      color: "#7352FF",
   },
   {
      name: "red-theme",
      color: "#FF5C8E",
   },
   {
      name: "indigo-theme",
      color: "#1E4DB7",
   },
   {
      color: "#FB9678",
      name: "orange-theme",
   },
];

export const userProfileData = [
   {
      icon: <BsCurrencyDollar />,
      title: "My Profile",
      desc: "Account Settings",
      iconColor: "#5E5FF5",
      iconBg: "#E5FAFB",
   },
   {
      icon: <BsShield />,
      title: "My Inbox",
      desc: "Messages & Emails",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
   },
   {
      icon: <FiCreditCard />,
      title: "My Tasks",
      desc: "To-do and Daily Tasks",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
   },
];

export const ordersGrid = [
   {
      headerText: "Image",
      template: gridOrderImage,
      textAlign: "Center",
      width: "120",
   },
   {
      field: "OrderItems",
      headerText: "Item",
      width: "150",
      editType: "dropdownedit",
      textAlign: "Center",
   },
   {
      field: "CustomerName",
      headerText: "Customer Name",
      width: "150",
      textAlign: "Center",
   },
   {
      field: "TotalAmount",
      headerText: "Total Amount",
      format: "C2",
      textAlign: "Center",
      editType: "numericedit",
      width: "150",
   },
   {
      headerText: "Status",
      template: gridOrderStatus,
      field: "OrderItems",
      textAlign: "Center",
      width: "120",
   },
   {
      field: "OrderID",
      headerText: "Order ID",
      width: "120",
      textAlign: "Center",
   },

   {
      field: "Location",
      headerText: "Location",
      width: "150",
      textAlign: "Center",
   },
];
