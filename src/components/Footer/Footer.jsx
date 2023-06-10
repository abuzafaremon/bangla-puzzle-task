import Newsletter from "../Newsletter/Newsletter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="py-10 px-5 bg-[#0c4063]">
      <div className="container mx-auto">
        <div className="-mt-20">
          <Newsletter />
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-center py-5">
          <div className="text-white text-2xl md:text-4xl font-bold flex flex-col gap-2 w-full">
            <a className="text-white" href="#">
              example@mail.com
            </a>
            <p>01234567890</p>
            <div className="flex gap-3 md:gap-5">
              <a className="text-white" href="#">
                <FaFacebookF />
              </a>
              <a className="text-white" href="#">
                <FaLinkedinIn />
              </a>
              <a className="text-white" href="#">
                <FaTwitter />
              </a>
              <a className="text-white" href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="text-white text-start md:text-center text-2xl md:text-4xl font-bold w-full">
            <p>Bangladesh Shishu Academy , Doyel Chattor, Shabag, Dhaka-1000</p>
          </div>
        </div>
        <div className="text-white font-bold pt-10">
          <p>
            &copy; 2023 by . <br /> Proudly created with{" "}
            <a href="https://github.com/abuzafaremon" className="text-blue-400">
              Zafar Emon
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
