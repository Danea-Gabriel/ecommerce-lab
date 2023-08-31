import { useSelector } from "react-redux";
import { allCartProducts } from "../redux/cartSlice";
import { totalCartPrice, subtotalCartPrice } from "../redux/cartSlice";
import { removeEverythingFromCart } from "../redux/cartSlice";
import CartPageItem from "../components/CartPageItem";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { userState } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalCartPrice);
  const allProducts = useSelector(allCartProducts);
  const subtotalPrice = useSelector(subtotalCartPrice);
  const userInfo = useSelector(userState);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (userInfo !== null) {
      navigate("/payment");
    } else {
      toast.error("Please Login First");
    }
  };

  console.log(subtotalPrice);
  return (
    <div>
      <div className="w-full h-60 object-cover bg-black"></div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <div className="w-2/3 pr-10">
          <div className="w-full">
            <h2 className="text-2xl font-medium">Shoping cart</h2>
          </div>
          {allProducts.map(product => (
            <CartPageItem key={product._id} product={product} />
          ))}
          <button
            onClick={() => dispatch(removeEverythingFromCart())}
            className="cursor-pointer py-1 bg-red-500 hover:bg-red-600 text-white mt-8 ml-7  px-6 duration-300"
          >
            Reset Cart
          </button>
        </div>
        <div className="w-1/3 bg-slate-50 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="text-lg font-medium">${subtotalPrice.toFixed(2)}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shiping{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis aut veritatis delectus at, praesentium
              </span>
            </p>
          </div>
          <p className="font-light flex justify-between mt-6">
            Total <span className="text-xl font-medium">${totalPrice.toFixed(2)}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="text-lg mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default CartPage;
