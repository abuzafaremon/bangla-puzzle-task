import mujib from "../../assets/images/Mujib100.png";
import { FaArrowRight } from "react-icons/fa";
const Ideology = () => {
  return (
    <section className="py-5 md:py-0 px-5">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row  gap-10 lg:w-10/12 mx-auto">
          <div className="border-b-4 md:border-none border-b-gray-300 md:flex md:items-end">
            <img className="w-10/12" src={mujib} alt="mujib" />
          </div>
          <div className="py-5 md:py-20 text-gray-600">
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase">
              THE IDEOLOGY
            </h2>
            <p className="py-4">
              My greatest strength is the love for my people, My greatest
              weakness is that I love them too much.
            </p>
            <h4 className="sm:text-xl lg:text-2xl font-semibold mb-4">
              -Bangabandhu Sheikh Mujibur Rahman
            </h4>
            <a
              className="inline-block transition-all
              px-6 py-2 hover:bg-gray-500 
             text-gray-600 hover:text-white  border border-gray-500 font-medium  rounded"
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
        </div>
      </div>
    </section>
  );
};

export default Ideology;
