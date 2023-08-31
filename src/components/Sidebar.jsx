import { useSelector, useDispatch } from "react-redux";
import { sideBarState } from "../redux/sidebarSlice";
import { IoArrowForward } from "react-icons/io5";
import { toggleSidebar } from "../redux/sidebarSlice";
import { allCartProducts, totalCartPrice, cartProductsQuantity } from "../redux/cartSlice";
import { removeEverythingFromCart } from "../redux/cartSlice";
import { userState } from "../redux/userSlice";
import { FiTrash2 } from "react-icons/fi";
import CartProduct from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Sidebar = () => {
  const showSideBar = useSelector(sideBarState);
  const cartProducts = useSelector(allCartProducts);
  const productsQuantity = useSelector(cartProductsQuantity);
  const total = useSelector(totalCartPrice);
  const userInfo = useSelector(userState);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (userInfo !== null) {
      navigate("/payment");
    } else {
      toast.error("Please Login First");
    }
  };

  const dispatch = useDispatch();
  return (
    <div
      className={`w-full  bg-white fixed top-[80px] right-0  h-full  shadow-2xl md:w-[35vw] lg:max-w-[35vw]  xl:max-w-[30vw] transition-all duration-300 z-20 lg: px-[35px] overflow-y-auto  ${
        showSideBar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({productsQuantity})</div>
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoArrowForward />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[60%] overflow-x-hidden border-b">
        {cartProducts.map(product => (
          <CartProduct key={product._id} product={product} />
        ))}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4 md:mt-2  ">
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
        <button
          onClick={handleCheckout}
          className="bg-gray-800 text-white flex p-4 justify-center items-center w-full font-medium hover:bg-black duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
