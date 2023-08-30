/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { incrementQuantityCart, decrementQuantityCart } from "../redux/cartSlice";

const CartPageItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-6 mt-6">
      <div
        onClick={() =>
          dispatch(
            removeFromCart({
              _id: product._id,
            })
          )
        }
        className="flex items-center gap-2"
      >
        <IoMdClose className="text-gray-500 hover:text-red-500 transition text-lg cursor-pointer" />
        <img className="w-32 h-32 object-cover" src={product.image} alt="" />
      </div>
      <h2 className="w-52">{product.title}</h2>
      <p className="w-10">${product.price}</p>
      <div className="flex gap-3">
        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
          <p className="text-sm">Quantity</p>
          <div className="flex items-center gap-4 text-sm font-semibold ">
            <button
              onClick={() =>
                dispatch(
                  decrementQuantityCart({
                    _id: product._id,
                  })
                )
              }
              className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
            >
              <IoMdRemove />
            </button>
            <span>{product.quantity}</span>
            <button
              onClick={() =>
                dispatch(
                  incrementQuantityCart({
                    _id: product._id,
                  })
                )
              }
              className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
      <p className="w-14">${product.quantity * product.price}</p>
    </div>
  );
};
export default CartPageItem;
