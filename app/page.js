import Material from "./_components/Material";
import Units from "./_components/Units";

export default function Home() {
  return (
    <div className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-6 sm:min-h-screen  w-full grid-cols-1 bg-[#FFFFF2]">
      {/* Left Sidebar */}
      <div className="bg-gray-200 text-white p-4 w-full">
        <div>Left SideBar</div>
      </div>

      {/* Main content area */}
      <div className="p-6">
        <div className="bg-gray-300 text-right w-full mb-12 p-4 rounded-t-lg">
          العناصر الانتقاليه
        </div>
        <Material />
        <Units />
      </div>
    </div>
  );
}
