import { useSelector, useDispatch } from "react-redux";
import { sideBarState } from "../redux/sidebarSlice";
import { IoArrowForward } from "react-icons/io5";
import { toggleSidebar } from "../redux/sidebarSlice";
import { allCartProducts, totalCartPrice } from "../redux/cartSlice";
import { removeEverythingFromCart } from "../redux/cartSlice";
import { FiTrash2 } from "react-icons/fi";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const showSideBar = useSelector(sideBarState);
  const cartProducts = useSelector(allCartProducts);
  const total = useSelector(totalCartPrice);

  const dispatch = useDispatch();
  return (
    <div
      className={`w-full  bg-white fixed top-[80px] right-0  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 lg: px-4 ${
        showSideBar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({cartProducts.length})</div>
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoArrowForward />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px]  lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cartProducts.map(product => (
          <CartProduct key={product._id} product={product} />
        ))}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        {/* sidebar bottom */}
        <div className=" flex w-full justify-between">
          <div className="uppercase font-medium">
            <span className="mr-2">Total:</span> $ {total.toFixed(2)}
          </div>
          <div
            onClick={() => dispatch(removeEverythingFromCart())}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/cart"
          className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium hover:bg-gray-300 duration-300"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-gray-800 text-white flex p-4 justify-center items-center w-full font-medium hover:bg-black duration-300"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
