import { logo, bag, userlogo } from "../assets/index";
import { Link } from "react-router-dom";
import { allCartProducts } from "../redux/cartSlice";
import { toggleSidebar } from "../redux/sidebarSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector(allCartProducts);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-28" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8 font-display">
          <ul className="flex items-center gap-8 font-display">
            <li className="text-base text-black font-bold   hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Home
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Shop
            </li>
            <li className="text-base text-black font-bold   hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Element
            </li>
            <li className="text-base text-black  font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          <div onClick={() => dispatch(toggleSidebar())} className="relative">
            <img className="w-7" src={bag} alt="shoppingbag" />
            <span className="absolute w-7 top-2 left-0 text-sm flex items-center justify-center font-semibold text-white">
              {cartProducts.length}
            </span>
          </div>
          <img className="w-8 h-8 rounded-full" src={userlogo} alt="userlogo" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
