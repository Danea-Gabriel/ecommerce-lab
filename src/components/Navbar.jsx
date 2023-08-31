import { logo, bag } from "../assets/index";
import { Link } from "react-router-dom";
import { cartProductsQuantity } from "../redux/cartSlice";
import { toggleClose, toggleSidebar } from "../redux/sidebarSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userState } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const productsQuantity = useSelector(cartProductsQuantity);
  const userInfo = useSelector(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
    dispatch(toggleClose());
  };
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
              <div onClick={handleHome} to="/">
                Home
              </div>
            </li>
            <li className="text-base text-black  font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              <Link to="/">Shop</Link>
            </li>
            <li className="text-base text-black font-bold   hover:text-orange-900 hover:underline underline-offset-2 decoration-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Element
            </li>
          </ul>
          <div onClick={() => dispatch(toggleSidebar())} className="relative cursor-pointer ">
            <img className="w-7" src={bag} alt="shoppingbag" />
            <span className="absolute w-7 top-2 left-0 text-sm flex items-center justify-center font-semibold text-white ">
              {productsQuantity}
            </span>
          </div>
          {userInfo !== null ? (
            <>
              <Link to={"/login"}>
                <img className="w-7 h-7 rounded-full" src={userInfo.image} alt="userlogo" />
              </Link>
              <p className="text-sm underline underline-offset-2 font-medium">{userInfo.name}</p>
            </>
          ) : (
            <Link to={"/login"} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
              </svg>
              <p className="text-sm underline underline-offset-2 font-medium hover:text-gray-600">Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
