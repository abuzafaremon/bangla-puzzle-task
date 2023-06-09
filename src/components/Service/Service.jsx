import { MdAlternateEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
const Service = () => {
  return (
    <section className="bg-[#115c8f] py-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-white font-semibold">
            CONSTITUENT SERVICES
          </h2>
        </div>
        <div className="flex gap-6 flex-wrap justify-center mt-10">
          <div className="w-44 h-44 flex justify-center items-center bg-[#0080d7] rounded-full">
            <div className="text-center text-white">
              <div className="flex justify-center">
                <MdAlternateEmail className="text-5xl" />
              </div>
              <a
                className="text-lg text-white block pt-2 hover:underline"
                href="mailto:"
              >
                Email Me
              </a>
            </div>
          </div>
          <div className="w-44 h-44 flex justify-center items-center bg-[#0080d7] rounded-full">
            <div className="text-center text-white">
              <div className="flex justify-center">
                <MdCall className="text-5xl" />
              </div>
              <a
                className="text-lg text-white block pt-2 hover:underline"
                href="mailto:"
              >
                Call Me
              </a>
            </div>
          </div>
          <div className="w-44 h-44 flex justify-center items-center bg-[#0080d7] rounded-full">
            <div className="text-center text-white">
              <div className="flex justify-center">
                <FaNewspaper className="text-5xl" />
              </div>
              <a
                className="text-lg text-white block pt-2 hover:underline"
                href="mailto:"
              >
                News
              </a>
            </div>
          </div>
          <div className="w-44 h-44 flex justify-center items-center bg-[#0080d7] rounded-full">
            <div className="text-center text-white">
              <div className="flex justify-center">
                <FaPassport className="text-5xl" />
              </div>
              <a
                className="text-lg text-white block pt-2 hover:underline"
                href="mailto:"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
