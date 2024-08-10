import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

interface Gallery {
  src: string;
  gallery_alt_text: string;
}

interface DestinationCarouselProps {
  galleries: Gallery[];
}

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({
  galleries,
}) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      height={474}
      className="w-full xl:w-[636px] h-80 lg:h-[474px]"
      withControls={false}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {galleries.slice(0, 3).map((gallery, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={gallery.src}
            alt={gallery.gallery_alt_text}
            width={636}
            height={474}
            className="object-cover w-full h-80 lg:h-[474px]"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
