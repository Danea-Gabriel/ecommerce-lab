/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { incrementQuantityCart, decrementQuantityCart } from "../redux/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200w-full font-light ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <img className="max-w-[80px]" src={product.image} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <p className="uppercase font-medium hover:underline">{product.title}</p>
            <div
              onClick={() =>
                dispatch(
                  removeFromCart({
                    _id: product._id,
                  })
                )
              }
              className="text-lg cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* add remove */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() =>
                  dispatch(
                    decrementQuantityCart({
                      _id: product._id,
                    })
                  )
                }
                className="flex-1 h-full flex justify-center items-center cursor-pointer hover:text-gray-600 duration-300"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center items-centerpx-2">{product.quantity}</div>
              <div
                onClick={() =>
                  dispatch(
                    incrementQuantityCart({
                      _id: product._id,
                    })
                  )
                }
                className="flex-1 h-full flex justify-center items-center cursor-pointer hover:text-gray-600 duration-300"
              >
                <IoMdAdd className="" />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-gray-600">${product.price}</div>
            <div className="flex-1 flex justify-end items-center font-medium">{`$${
              product.price * product.quantity
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
