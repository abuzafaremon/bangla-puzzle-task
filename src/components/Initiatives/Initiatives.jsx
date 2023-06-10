import tripple3 from "../../assets/images/initiatives/333.jpg";
import tripple9 from "../../assets/images/initiatives/999.jpg";
import startupbd from "../../assets/images/initiatives/startupbd.jpg";
import porichoy from "../../assets/images/initiatives/porichoy.jpg";
import foodForNation from "../../assets/images/initiatives/foodForNation.png";
import surokkha from "../../assets/images/initiatives/surokkha.png";
const Initiatives = () => {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row md:items-center gap-x-10 gap-y-5 w-full xl:w-10/12 mx-auto">
          <div className="mb-5 w-full lg:w-4/12">
            <h2 className="text-2xl text-[#115c8f] lg:text-3xl font-semibold tracking-tighter uppercase">
              INITIATIVES
            </h2>
            <p className="mt-4">
              ICT Division has taken initiatives to build Digital Bangladesh.
              Our software and service industry is a billion-dollar market and
              is expected to grow our export to USD 5 Billion by 2025. We are
              serving clients in the array of domains -Financial Services,
              Telecom companies, Healthcare. Various Startup projects, High-Tech
              parks, Sheikh Kamal IT Training and Incubation Centers etc
              projects are underway across the country.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={tripple3}
                    alt="333"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2">
                <span>333</span>
              </div>
            </a>
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={tripple9}
                    alt="999"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2">
                <span>999</span>
              </div>
            </a>
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={startupbd}
                    alt="startupbd"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2 text-center sm:text-left">
                <span>Startup Bangladesh</span>
              </div>
            </a>
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={porichoy}
                    alt="porichoy"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2">
                <span>Porichoy</span>
              </div>
            </a>
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={foodForNation}
                    alt="foodForNation"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2 text-center sm:text-left">
                <span>Food For Nation</span>
              </div>
            </a>
            <a
              className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
              href="#"
            >
              <div className="bg-white w-full sm:w-fit flex justify-center">
                <dir className="w-32 h-32 p-0 sm:p-2">
                  <img
                    className="object-contain h-full w-full object-center"
                    src={surokkha}
                    alt="surokkha"
                  />
                </dir>
              </div>
              <div className="uppercase text-lg sm:text-2xl text-[#115c8f] font-semibold py-2 px-2">
                <span>surokkha</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
