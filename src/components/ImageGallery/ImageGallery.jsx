import photo1 from "../../assets/images/photoGallery/photo1.jpg";
import photo2 from "../../assets/images/photoGallery/photo2.jpg";
import photo3 from "../../assets/images/photoGallery/photo3.jpg";
import photo4 from "../../assets/images/photoGallery/photo4.jpg";
import photo5 from "../../assets/images/photoGallery/photo5.jpg";
import photo6 from "../../assets/images/photoGallery/photo6.jpg";
const ImageGallery = () => {
  const photoArray = [
    { src: photo1, id: 1 },
    { src: photo2, id: 2 },
    { src: photo3, id: 3 },
    { src: photo4, id: 4 },
    { src: photo5, id: 5 },
    { src: photo6, id: 6 },
  ];
  return (
    <section className="py-10 px-5 bg-[#f3f3f3]">
      <div className="container mx-auto">
        <div className="w-full lg:w-10/12 mx-auto">
          <div>
            <h2 className="text-3xl text-[#0080d7] font-bold tracking-[.4em] uppercase">
              PHOTO GALLERY
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg::grid-cols-3 gap-5 w-full py-10 lg:w-10/12 mx-auto">
            {photoArray.map(({ src, id }) => (
              <div
                key={id}
                className="w-full h-60 overflow-hidden group transition-all"
              >
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-all"
                  src={src}
                  alt="image"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="py-2 px-4 shadow text-black bg-gray-200 hover:bg-gray-300 font-semibold"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
