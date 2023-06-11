import Slider from "react-slick";
import img1 from "../../assets/images/mediaCoverage/1.jpg";
import img2 from "../../assets/images/mediaCoverage/2.jpg";
import img3 from "../../assets/images/mediaCoverage/3.png";
import img4 from "../../assets/images/mediaCoverage/4.jpg";
import "./MediaCoverage.css";

const MediaCoverage = () => {
  const sliderArr = [
    {
      id: 1,
      img: img1,
      title: "Anjir Liton received Shishu Sahitya Award",
      text: "Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se.",
    },
    {
      id: 2,
      img: img2,
      title:
        "Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.",
      text: "Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupal.",
    },
    {
      id: 3,
      img: img3,
      title: "Shishu Academy new Director General Anjir Liton",
      text: "Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years. The Ministry of Public Administration issued a notification in this regard on Tuesday.Earlier on Monda.",
    },
    {
      id: 4,
      img: img4,
      title: "10 get Bangla Academy Literary Award 2020",
      text: "Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020. Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir Chowdhury conference room of the academy 4.",
    },
  ];

  // slider settings
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="py-10 px-10 bg-[#0080d7]">
      <div className="container mx-auto">
        <div className="w-full mx-auto lg:w-10/12">
          <div>
            <h2 className="text-3xl text-white font-bold tracking-[.4em] uppercase">
              MEDIA COVERAGES
            </h2>
          </div>
          <div className="py-10 w-full lg:w-10/12 mx-auto">
            <Slider {...settings}>
              {sliderArr.map(({ img, id, title, text }) => (
                <div key={id} className="p-2 rounded-md bg-white pb-5">
                  <div className="p-1 border border-gray-300 rounded-md mb-4">
                    <img
                      className="w-full object-cover"
                      src={img}
                      alt={`slider${id}`}
                    />
                  </div>
                  <time className="text-gray-400">Jan 15, 2023</time>
                  <div>
                    <a
                      className="text-black text-sm font-medium py-1 block"
                      href="#"
                    >
                      {title}
                    </a>
                    <p>{text}</p>
                    <a className="text-black underline" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
