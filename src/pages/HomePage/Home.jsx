import Header from "../../components/Header/Header";
import Ideology from "../../components/Ideology/Ideology";
import Initiatives from "../../components/Initiatives/Initiatives";
import Inspiration from "../../components/Inspiration/Inspiration";
import Journey from "../../components/Journey/Journey";
import Service from "../../components/Service/Service";
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
    </>
  );
};

export default Home;
