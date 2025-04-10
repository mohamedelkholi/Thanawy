import Link from "next/link";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3 items-end">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 text-purple-600 text-lg font-medium px-6 py-4 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:rounded-sm active:text-purple-800"
          >
            <span>المواد الدراسية</span>
            <FaBookOpen className="w-6 h-6 text-purple-400 transition-all duration-300 hover:text-brand-600" />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 text-purple-600 text-lg font-medium px-6 py-4 transition-all duration-300  hover:bg-purple-600 hover:text-white hover:rounded-sm active:text-purple-800"
          >
            <span>الإحصائيات</span>
            <FaChartPie className="w-6 h-6 text-purple-400 transition-all duration-300 hover:text-brand-600" />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 text-purple-600 text-lg font-medium px-6 py-4 transition-all duration-300  hover:bg-purple-600 hover:text-white hover:rounded-sm active:text-purple-800"
          >
            <span>ترتيبك</span>
            <FaStar className="w-6 h-6 text-purple-400 transition-all duration-300 hover:text-brand-600" />
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className="flex items-center gap-3 text-purple-600 text-lg font-medium px-6 py-4 transition-all duration-300  hover:bg-purple-600 hover:text-white hover:rounded-sm active:text-purple-800"
          >
            <span>الاشتركات</span>
            <FaUserPlus className="w-6 h-6 text-purple-400 transition-all duration-300 hover:text-brand-600" />
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex items-center gap-3 text-purple-600 text-lg font-medium px-6 py-4 transition-all duration-300  hover:bg-purple-600 hover:text-white hover:rounded-sm active:text-purple-800"
          >
            <span>الاعدادات</span>
            <HiOutlineCog6Tooth className="w-6 h-6 text-purple-400 transition-all duration-300 hover:text-brand-600" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
