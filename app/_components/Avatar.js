import Image from "next/image";
import avatar from "@/public/avatar.png";

function Avatar() {
  return (
    <div className="flex items-center  gap-4 font-medium ">
      <div className="text-right">
        <div className="text-purple-700 font-bold text-sm">كريم أحمد</div>
        <div className="text-sm text-grey-500">الصف الثالث الثانوي</div>
      </div>
      <Image
        src={avatar}
        alt={`avatar of كريم احمد`} //should be dynamically
        // alt={`avatar of ${fullName}`}
        className="w-14 h-14 object-cover object-center rounded-full outline  outline-grey-100"
      />
    </div>
  );
}

export default Avatar;
