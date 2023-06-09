import journey from "../../assets/images/journey.jpg";
import { FaArrowRight } from "react-icons/fa";
const Journey = () => {
  return (
    <section className="py-10 px-5 bg-[#0080d7]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-5 w-full lg:w-10/12 mx-auto">
          <div className="w-full order-first md:order-last">
            <img className="w-full" src={journey} alt="journey" />
          </div>
          <div className="w-full text-white py-5 order-last md:order-first">
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase">
              MY JOURNEY WITH SHISHU ACADEMY
            </h2>
            <p className="mt-4">
              One of the strengths to build a golden Bengal in the ideology of
              Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our
              future generation, who are today&apos;s children. Bangladesh
              Shishu Academy is for children. Bangladesh Shishu Academy is
              working to develop latent talents including creative and gentle
              scholarship for the purpose of creating the spirit of great
              liberation war, love of country, moral education, discipline and
              sense of responsibility among the children. Under the leadership
              of Hon&apos;ble Prime Minister Sheikh Hasina, a child friendly
              environment has been created in the country today. At present
              children&apos;s academy activities are being carried out in 64
              districts and 6 upazilas (Keshabpur, Parshuram, Mithapukur,
              Kulaura, Srinagar and Babuganj upazilas) for the creative
              development and protection of children&apos;s rights. Under this
              program, various programs are being implemented in collaboration
              with the local administration for the participation of children
              across the country.
            </p>
            <a
              className="inline-block mt-4 transition-all px-6 py-2 hover:bg-white text-white hover:text-[#115c8f] border border-white font-medium rounded"
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

export default Journey;
