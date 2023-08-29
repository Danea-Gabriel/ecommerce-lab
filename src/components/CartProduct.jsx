/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useState } from "react";
import { updateCartItemQuantity } from "../redux/cartSlice";
const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const handleAdd = () => {
    const updateQunatity = quantity + 1;
    setQuantity(updateQunatity);
    dispatch(
      updateCartItemQuantity({
        _id: product._id,
        quantity: updateQunatity,
      })
    );
  };

  const handleMinus = () => {
    const updateQunatity = quantity - 1;
    if (updateQunatity === 0) {
      return;
    }
    setQuantity(updateQunatity);
    dispatch(
      updateCartItemQuantity({
        _id: product._id,
        quantity: updateQunatity,
      })
    );
  };
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
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity,
                    description: product.description,
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
              <div onClick={handleMinus} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center items-centerpx-2">{product.quantity}</div>
              <div onClick={handleAdd} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
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
