import { logo } from "../assets/index";
import { FaHome, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-20 font-display">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* Logo */}
        <div className="flex flex-col gap-7">
          <img className="w-32 bg-white" src={logo} alt="" />
          <p>EcommereceLab.com</p>
          <div className="flex gap-5 text-gray-400">
            <FaFacebook className="text-2xl hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Cluj, Romania</p>
            <p>Mobile: +407221321</p>
            <p>Phone: +026342123</p>
            <p>e-mail: ecommercelab@gmail.com</p>
          </div>
        </div>
        {/* Profile */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              my checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{" "}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{" "}
              help and support
            </p>
          </div>
        </div>
        {/* Sub input */}
        <div className="flex flex-col justify-center">
          <input className="bg-transparent border  px-4 py-2 text-sm" placeholder="email" type="text" name="" id="" />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
