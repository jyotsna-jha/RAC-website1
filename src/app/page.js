import Herosection from "@/app/components/Herosection";
import RacImageGallery from "./components/RacImageGallery";
import Achievement from "./components/Achievement";
import AboutThapathaliComponent from "./components/aboutHome";

const Page = () => {
  return (
    <>
      <Herosection title={"Robotics and Automation Center"} />
      <AboutThapathaliComponent/>
      <RacImageGallery />
      <Achievement />
    </>
  );
};

export default Page;
