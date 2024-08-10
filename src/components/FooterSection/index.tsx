import { MEDIA_SOCIAL_URL } from "@/utils/constants/path.constant";
import { TEXT } from "@/utils/constants/text.constant";
import { Icon } from "@iconify/react/dist/iconify.js";

const FooterSection = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-8 px-4 max-w-[1250px] flex flex-col md:flex-row justify-center md:justify-between items-center">
        <span className="text-white font-AlbertSans text-sm text-center md:text-left">
          {TEXT.FOOTER_SECTION}
        </span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={MEDIA_SOCIAL_URL.FACEBOOK} className="text-white">
            <Icon icon="streamline:facebook-1" width={20} />
          </a>
          <a href={MEDIA_SOCIAL_URL.INSTAGRAM} className="text-white">
            <Icon icon="streamline:instagram" width={20} />
          </a>
          <a href={MEDIA_SOCIAL_URL.MAIL} className="text-white">
            <Icon icon="pepicons-print:letter" width={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
