import { FaArrowRight } from "react-icons/fa";
import inspiration from "../../assets/images/hasina.jpg";
const Inspiration = () => {
  return (
    <section className="bg-[#0080d7] py-5 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-5 w-full lg:w-10/12 mx-auto">
          <div className="py-5 text-white w-full order-last md:order-first">
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase">
              MY LEADER AND INSPIRATION
            </h2>
            <p className="font-medium text-lg lg:text-2xl my-4">
              - Honorable Prime Minister Sheikh Hasina
            </p>
            <a
              className="inline-block transition-all px-6 py-2 hover:bg-white text-white hover:text-[#115c8f] border border-white font-medium rounded"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-1">
                <span>Learn More</span>
                <FaArrowRight />
              </span>
            </a>
          </div>
          <div className="w-full order-first md:order-last">
            <img src={inspiration} alt="inspiration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
