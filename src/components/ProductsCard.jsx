/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = product.title;
  const joinId = id => {
    return id.toLowerCase().split(" ").join("");
  };

  const rootId = joinId(id);
  const handleNavigation = () => {
    navigate(`/products/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      <div onClick={handleNavigation} className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-display text-base ">{product.title.substring(0, 15)}</h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} added to cart`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && <p className="bg-black text-white px-6 py-1">Sale</p>}
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
export default ProductsCard;
