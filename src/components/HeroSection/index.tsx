import { URL_PATH } from "@/utils/constants/path.constant";

const HeroSection = () => {
  return (
    <section
      className="h-screen lg:h-[810px] bg-cover bg-center place-items-center"
      style={{ backgroundImage: `url(${URL_PATH.IMAGE.BACKGROUND_IMAGE})` }}
    >
      <div className="pt-80 bg-opacity-50 flex flex-col lg:items-start text-white max-w-[90%] lg:max-w-[1250px] mx-auto">
        <p className="text-8xl lg:text-[86px] font-TheSignature text-secondary leading-tight lg:leading-none text-center">
          Premium Travel
        </p>
        <h1 className="text-3xl lg:text-5xl mb-2 font-Unbounded font-bold leading-tight lg:leading-none text-center">
          Beyond Expectation
        </h1>
        <p className="text-lg lg:text-2xl mb-4 max-w-full lg:max-w-[710px] lg:text-start">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <a
          href="#experience"
          className="text-white lg:px-6 py-2 lg:py-3 rounded-full border-2 font-semibold hover:bg-secondary hover:border-secondary transition-all text-center"
        >
          Take me there
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
