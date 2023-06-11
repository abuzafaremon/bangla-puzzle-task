import Slider from "react-slick";
import img1 from "../../assets/images/slider/1.jpg";
import img2 from "../../assets/images/slider/2.jpg";
import img3 from "../../assets/images/slider/3.jpg";
const Hero = () => {
  const sliderArr = [
    { img: img1, id: 1, text: "DG Sir Visit Tungi Para" },
    { img: img2, id: 2, text: "Tungi Para Visit" },
    {
      img: img3,
      id: 3,
      text: "Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement",
    },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="bg-[#115c8f] overflow-hidden text-white">
      <Slider {...settings}>
        {sliderArr.map(({ id, img, text }) => (
          <div key={id} className="relative">
            <img
              className="w-full h-[500px] object-cover"
              src={img}
              alt="img"
            />
            <div className="absolute top-2/4 left-5 -translate-y-2/4 bg-black bg-opacity-50 w-3/4 md:w-1/2 py-5 px-5">
              <h2 className="text-3xl hover:underline mb-2">{text}</h2>
              <div className="flex justify-center items-center">
                <button className="bg-[#115c8f] px-4 py-2">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
