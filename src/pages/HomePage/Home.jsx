import FlowerGiving from "../../components/FlowerGiving/FlowerGiving";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Ideology from "../../components/Ideology/Ideology";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Initiatives from "../../components/Initiatives/Initiatives";
import Inspiration from "../../components/Inspiration/Inspiration";
import Journey from "../../components/Journey/Journey";
import Location from "../../components/Location/Location";
import Service from "../../components/Service/Service";
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <Ideology />
      <Inspiration />
      <UpcomingEvent />
      <Journey />
      <Initiatives />
      <FlowerGiving />
      <VideoGallery />
      <ImageGallery />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
