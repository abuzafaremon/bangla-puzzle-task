const VideoGallery = () => {
  const videoArr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <section className="py-10 px-5 bg-[#0080d7]">
      <div className="container mx-auto">
        <div className="w-full lg:w-10/12 mx-auto">
          <div>
            <h2 className="text-3xl text-white font-bold text-uppercase tracking-[.4em] uppercase">
              Video Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full py-10 lg:w-10/12 mx-auto">
            {videoArr.map(({ id }) => (
              <div key={id} className="w-full h-72 sm:h-full relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/k0FC8biMK6A"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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

export default VideoGallery;
