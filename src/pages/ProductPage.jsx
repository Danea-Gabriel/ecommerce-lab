import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setDetails(location.state?.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative ">
          <img className="w-full h-[550px] object-cover" src={details.image} alt="" />
          <div className="absolute top-4 right-0">
            {details.isNew && <p className="bg-black text-white px-8 py-1">Sale</p>}
          </div>
        </div>
        {/* RightSide */}
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl ">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">${details.oldPrice}</p>
              <p className="text-2xl font-medium">${details.price}</p>
            </div>
          </div>
          {/* Stars */}
          <div className="flex items-center gap-2 text-base">
            <div className="flex ">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-sx text-gray-500">(12 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          {/* add to cart */}
          <div className="flex gap-3">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold ">
                <button
                  onClick={() => setQuantity(prev => (prev === 1 ? prev : prev - 1))}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  <IoMdRemove />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  <IoMdAdd />
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: quantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} added to cart`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category: <span className="font-medium capitalize">{details.category}</span>
          </p>
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
    </div>
  );
};
export default ProductPage;
