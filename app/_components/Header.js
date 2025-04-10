import Avatar from "./Avatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="md:flex md:justify-between md:items-center border-b-1 border-purple-500 ">
      <div className=" sm:p-[1.2rem_4.8rem]  flex gap-[1.2rem] items-center justify-start flex-row">
        <Avatar />
        <HeaderMenu />
      </div>
      <div className=" hidden md:block md:ml-auto md:text-right md:font-bold md:text-2xl  ml-auto text-right font-bold text-sm">
        المواد الدراسيه
      </div>
    </div>
  );
}

export default Header;
