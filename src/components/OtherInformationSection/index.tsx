import { URL_PATH } from "@/utils/constants/path.constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const OtherInformationSection = () => {
  return (
    <div className="bg-[#FAF9F5]">
      <div className="container mx-auto py-16 px-4 max-w-[1250px] relative">
        <div className="relative">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10 h-[192px] md:h-[150px]"></div>
          <Image
            src={URL_PATH.IMAGE.INFORMATION_ABOUT_BG}
            alt="Information Background"
            width={1096}
            height={102}
            className="mt-16 w-full object-cover h-[192px] md:h-[150px] z-0"
          />

          <Image
            src={URL_PATH.IMAGE.LOGO_IMAGE}
            alt="logo"
            width={145}
            height={54}
            className="absolute top-4 left-4 z-20 py-2 w-[120px] h-auto md:w-[145px] md:h-[54px]"
          />

          <div className="text-base absolute top-0 right-0 mt-4 mr-4 text-white z-20 p-2 md:text-lg md:mr-8 md:mt-8">
            <p className="mb-2">
              Want to see other destinations? Check us out at our website
            </p>
            <Link
              href="https://pandooin.com/id"
              className="text-base font-bold underline flex items-center md:text-lg"
            >
              pandooin.com{" "}
              <Icon
                icon="heroicons-outline:arrow-up"
                className="rotate-45 pl-1"
                width={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInformationSection;
