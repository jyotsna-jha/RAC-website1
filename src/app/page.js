import Herosection from "@/app/components/Herosection";
import RacImageGallery from "./components/RacImageGallery";
import Achievement from "./components/Achievement";

const Page = () => {
  return (
    <>
      <Herosection title={"Robotics and Automation Center"} />
      <RacImageGallery />
      <Achievement />
    </>
  );
};

export default Page;
