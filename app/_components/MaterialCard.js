// import { GiChemicalBolt } from "react-icons/gi";

// function MaterialCard({ borderColor, children }) {
//   return (
//     <div
//       className={`p-6 rounded-lg border-2 shadow-md transition-all duration-300 ${
//         borderColor || "border-purple-500"
//       } hover:scale-105`}
//     >
//       <div className="flex items-center space-x-2">
//         <GiChemicalBolt className="text-green-500" size={30} />
//         <h3 className="text-xl font-semibold">{children}</h3>
//       </div>
//     </div>
//   );
// }

// export default MaterialCard;

import { GiChemicalBolt } from "react-icons/gi";

function MaterialCard({ borderColor, children }) {
  return (
    <div
      className={`p-6 lg:w-[30%] rtl sm:w-full md:w-full  bg-white rounded-lg border-2 shadow-md transition-all duration-300 ${
        borderColor || "border-purple-500"
      } hover:scale-105  h-full`}
    >
      <div className="flex items-center space-x-2">
        <GiChemicalBolt className="text-green-500" size={30} />
        <h3 className="text-xl font-semibold">{children}</h3>
      </div>
    </div>
  );
}

export default MaterialCard;
