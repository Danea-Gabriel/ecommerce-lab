import { userState } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { totalCartPrice } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { removeEverythingFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(userState);
  const totalPrice = useSelector(totalCartPrice);
  const handleClick = () => {
    dispatch(removeEverythingFromCart());
    toast.success("Payment Successful");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <div className="h-full">
        <div>
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
            <img
              className="rounded-t shadow-lg"
              src={"https://preview.cruip.com/mosaic/images/pay-bg.jpg"}
              width="460"
              height="180"
              alt="Pay background"
            />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
            <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
              <div className="text-center mb-6">
                <div className="mb-2">
                  <img
                    className="-mt-8 inline-flex rounded-full"
                    src={userInfo ? userInfo.image : ""}
                    width="64"
                    height="64"
                    alt="User"
                  />
                </div>
                <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">One more Step 🔥</h1>
                <div className="text-sm">Please provide the card details down bellow</div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative flex w-full p-1 bg-gray-50 rounded">
                  <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span className="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transhtmlForm transition duration-150 ease-in-out translate-x-0"></span>
                  </span>
                  <button className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                    Pay With Card
                  </button>
                  <button className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                    Pay With PayPal
                  </button>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="card-nr">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="card-nr"
                      className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="text"
                      placeholder="1234 1234 1234 1234"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="card-expiry"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">
                        CVC <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="card-cvc"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="card-name">
                      Name on Card <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="card-name"
                      className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="card-email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="card-email"
                      className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                      type="email"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4">
                    <button
                      onClick={handleClick}
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                    >
                      Pay {totalPrice ? totalPrice.toFixed(2) : 0} $
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 italic text-center">
                    You'll be charged {totalPrice ? totalPrice.toFixed(2) : 0}$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
};
export default Payment;
