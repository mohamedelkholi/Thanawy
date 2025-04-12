import { HiMenu, HiOutlineLogout } from "react-icons/hi";
import MainNav from "./MainNav";
import ButtonIcon from "./ButtonIcon";
import Image from "next/image";
import Frame from "@/public/Frame.png";

function SideBar() {
  return (
    <div className="mt-8 mr-12 sm:mr-24 md:mr-8 flex flex-row-reverse items-start md:flex md:flex-col md:items-stretch md:flex-nowrap  ">
      <div className="flex justify-end items-center gap-10">
        <div className="pb-3 font-bold text-3xl text-purple-800">ثانوى</div>
        <ButtonIcon>
          <HiMenu />
        </ButtonIcon>
      </div>

      <div className="flex flex-col gap-12 ">
        <div>
          <MainNav className="md:flex-grow" />
        </div>

        <div className="w-[90%] flex flex-col items-center justify-center rounded-xl gradient-purple p-6 mx-7	">
          <Image src={Frame} alt="rocket" />
          <p className="mt-4 text-right text-white text-md">
            رحلتك نحو التفوق تبدأ بخطوة
          </p>
          <button className="bg-white text-purple-800 rounded-xl text-sm w-full py-4 mt-6">
            اشترك الآن
          </button>
        </div>
        <div className="flex items-center justify-end gap-2 mt-auto p-4 text-right">
          <HiOutlineLogout className="w-5 h-5 text-red-600" />
          <span className="text-red-600">تسجيل خروج</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
