import ButtonIcon from "./ButtonIcon.js";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

function HeaderMenu() {
  return (
    <div className="flex text-2xl font-bold items-center ml-8 justify-between lg:gap-70 xl:gap-120 2xl:gap-180 ">
      <ul className="flex gap-0.5 pt-5">
        <li className="">
          <ButtonIcon>
            <FiSearch size={12} />
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon>
            <FiBell size={12} />
          </ButtonIcon>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
