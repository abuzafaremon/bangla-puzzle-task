import bg from "../../assets/images/newsletter-email.png";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-2 md:gap-4 bg-[#0080d7] p-5 md:p-8 rounded-xl relative z-10">
      <div className="text-white text-center lg:text-left relative z-10">
        <h2 className="text-2xl font-semibold">NEWSLETTER SUBSCRIBE</h2>
        <p className="text-lg py-2">
          Sign up with your email address to updates.
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 z-20 relative">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full border border-gray-300 py-3 px-4 rounded-md placeholder:font-light placeholder:text-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full border border-gray-300 py-3 px-4 rounded-md placeholder:font-light placeholder:text-lg outline-none"
          />
          <button className="w-full bg-[#115c8f] hover:bg-[#0e476d] text-white rounded-md  transition-all col-span-full md:col-span-1  font-bold uppercase px-4 py-3">
            Submit
          </button>
        </div>
      </form>
      <img
        className="absolute left-0 top-0 h-32 opacity-20"
        src={bg}
        alt="bg"
      />
    </div>
  );
};

export default Newsletter;
