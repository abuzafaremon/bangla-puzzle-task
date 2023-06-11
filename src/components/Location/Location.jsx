import map from "../../assets/images/bsa-maps.png";
const Location = () => {
  return (
    <section className="py-10 px-5 pb-20">
      <div className="container mx-auto">
        <div className="w-full mx-auto lg:w-10/12 flex flex-col md:flex-row items-center gap-5">
          <div className="w-full">
            <img className="w-full" src={map} alt="map" />
          </div>
          <div className="w-full flex flex-col sm:flex-row md:flex-col gap-5">
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl font-medium">
                Present Address
              </h2>
              <p className="text-lg">
                <span>Present Address- Bangladesh Shishu Academy,</span>
                <br />
                <span> Doyel Chattor, Shabag, Dhaka-1000</span>
              </p>
            </div>
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl font-medium">
                Permanent Address
              </h2>
              <p className="text-lg">
                <span>Permanent Address- Mymensingh District</span>
                <br />
                <span> Mymensingh, Bangladesh</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
