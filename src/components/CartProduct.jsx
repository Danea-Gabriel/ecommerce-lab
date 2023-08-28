import { IoMdClose } from "react-icons/io";
const CartProduct = ({ product }) => {
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <img className="max-w-[80px]" src={product.image} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <p className="uppercase font-medium hover:underline">{product.title}</p>
            <div className="text-lg cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
