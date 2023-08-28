import { useSelector, useDispatch } from "react-redux";
import { sideBarState } from "../redux/sidebarSlice";
import { IoArrowForward } from "react-icons/io5";
import { toggleSidebar } from "../redux/sidebarSlice";
import { allCartProducts } from "../redux/cartSlice";
import CartProduct from "./CartProduct";
const Sidebar = () => {
  const showSideBar = useSelector(sideBarState);
  const cartProducts = useSelector(allCartProducts);

  const dispatch = useDispatch();
  return (
    <div
      className={`w-full  bg-white fixed top-[80px] right-0  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 lg: px-4 ${
        showSideBar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoArrowForward />
        </div>
      </div>
      <div>
        {cartProducts.map(product => (
          <CartProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
