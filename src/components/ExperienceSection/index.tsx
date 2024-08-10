import { TEXT } from "@/utils/constants/text.constant";
import DiscoverExperienceComp from "./components/DiscoverExperienceComp";

const ExperienceSection = () => {
  return (
    <div className="bg-[#faf9f5]">
      <div className="container mx-auto text-center py-10 lg:py-16 max-w-[1250px]">
        <div className="lg:mb-16">
          <span className="text-[84px] font-TheSignature text-[#0B7373]">
            Beyond Premium
          </span>
          <h2 className="text-primary font-Unbounded text-[32px] font-bold mb-[80px]">
            ELEVATE YOUR EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-0 px-4">
            {TEXT.EXPERIENCE_SECTION.map((item, index) => (
              <div className="flex flex-col items-center" key={index}>
                <img
                  alt={item?.TITLE}
                  src={item?.ICON}
                  className="h-[128px] mb-4"
                />
                <h3 className="uppercase text-[#0B7373] text-[24px] font-AlbertSans mb-2">
                  {item?.TITLE}
                </h3>
                <p className="text-black">{item?.DESCRIPTION}</p>
              </div>
            ))}
          </div>
        </div>
        <DiscoverExperienceComp />
      </div>
    </div>
  );
};

export default ExperienceSection;
