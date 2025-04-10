function UnitCard({ name }) {
  return (
    <div className="flex items-center justify-end w-full h-[60px] mt-4 bg-gray-100 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl text-right  font-semibold text-gray-800 mb-4">
        {name}
      </h3>
    </div>
  );
}

export default UnitCard;
