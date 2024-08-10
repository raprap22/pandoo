import { URL_PATH } from "@/utils/constants/path.constant";
import { TEXT } from "@/utils/constants/text.constant";
import Image from "next/image";

const DiscoverExperienceComp = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 py-8">
        <Image
          src={URL_PATH.IMAGE.DISCOVER_IMAGE}
          alt="Discover Image"
          width={329}
          height={302}
          className="w-[229px] md:w-[329px]"
        />
        <div className="text-start w-full md:w-[599px]">
          <p className="uppercase font-Unbounded font-bold text-xl text-primary text-center md:text-start">
            {TEXT.DISCOVER_EXPERIENCE.TITLE}
          </p>
          <p className="font-AlbertSans font-normal text-lg md:text-xl text-black text-center md:text-start mt-2">
            {TEXT.DISCOVER_EXPERIENCE.DESCRIPTION}
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-primary text-white py-3 px-6 font-bold hover:bg-secondary rounded-full mt-4 transition-all">
              Customize Your Trip
            </button>
          </div>
        </div>
      </div>
      <Image
        src={URL_PATH.IMAGE.DIVIDER_ICON}
        alt="Divider Icon"
        width={1296}
        height={96.7}
        className="w-full mt-11"
      />
    </>
  );
};

export default DiscoverExperienceComp;
