import { fetchDestinations } from "@/api";
import { URL_PATH } from "@/utils/constants/path.constant";
import { Products } from "@/utils/interface";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const LuxuryFootagesSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const [destinations, setDestinations] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data?.data);
      } catch (error) {
        setError("Failed to fetch destinations");
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const repeatedDestinations = Array.from(
    { length: 3 },
    (_, i) => destinations[i % destinations.length]
  );

  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-16 max-w-[1250px] md:p-8 p-5">
        <div className="lg:h-[950px]">
          <p className="font-TheSignature text-7xl text-primary">
            Luxury Footages
          </p>
          <div className="lg:hidden mt-10">
            <Carousel
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              withControls={false}
              loop
              classNames={{
                root: "carousel-root",
                container: "carousel-container",
              }}
            >
              {repeatedDestinations.map((item, index) => (
                <Carousel.Slide key={index}>
                  <Image
                    src={item.related_galleries[6].src}
                    alt={item.related_galleries[6].gallery_alt_text}
                    width={300}
                    height={300}
                    className="object-cover w-full lg:h-[340px] h-[480px]"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
          <div className="hidden lg:inline-flex gap-8 mt-10">
            {repeatedDestinations.map((item, index) => (
              <Image
                src={item.related_galleries[6].src}
                alt={item.related_galleries[6].gallery_alt_text}
                key={index}
                width={300}
                height={300}
                className="h-[280px] w-[380px]"
              />
            ))}
          </div>

          <div className="hidden lg:block">
            <Image
              src={URL_PATH.IMAGE.DIVIDER_ICON_WHITE}
              alt="Divider Icon"
              width={1296}
              height={96.7}
              className="mt-10"
            />
          </div>

          <div className="hidden lg:inline-flex gap-8 mt-10">
            {destinations.map((item, index) => (
              <Image
                src={item.related_galleries[2].src}
                alt={item.related_galleries[2].gallery_alt_text}
                key={index}
                width={300}
                height={300}
                className="h-[280px] w-[380px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryFootagesSection;
