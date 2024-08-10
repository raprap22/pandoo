import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { fetchDestinations } from "@/api";
import { Products } from "@/utils/interface";
import Link from "next/link";
import DestinationCarousel from "./components/DestinationCarousel";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

const DestinationSection = () => {
  const [destinations, setDestinations] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDaysAndNights = (days: number): string => {
    if (days < 1) {
      return "Invalid number of days";
    }
    const nights = days - 1;
    return `${days} days ${nights} ${nights > 1 ? "nights" : "night"}`;
  };

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

  const repeatedDestinations = Array.from(
    { length: 4 },
    (_, i) => destinations[i % destinations.length]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-[#faf9f5]">
      <div className="container mx-auto text-center lg:py-16 max-w-[1250px]">
        <div className="h-[2926] lg:px-0 px-4">
          <div className="flex lg:mb-28">
            <div className="inline-flex flex-col md:flex-row gap-4 md:gap-10">
              <p className="font-Unbounded font-bold lg:text-4xl text-2xl text-primary pt-2">
                Destinations
              </p>
              <span className="text-primary inline-flex font-medium text-2xl font-AlbertSans items-center hover:text-secondary transition-all cursor-pointer">
                <Icon
                  icon="solar:round-alt-arrow-right-linear"
                  width={64}
                  className="pr-4"
                />
                Explore more
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch">
            {destinations?.map((item, index) => (
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 py-10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                key={index}
              >
                <DestinationCarousel
                  galleries={item.related_galleries}
                />
                <div className="w-full lg:w-[580px] flex flex-col justify-between h-full">
                  <div>
                    <p className="pb-2 font-AlbertSans text-start font-light text-primary text-base">
                      {formatDaysAndNights(item.itinerary_day)}
                    </p>
                    <p className="py-2 font-Unbounded text-start font-bold text-tertiary text-2xl">
                      {item.itinerary_name}
                    </p>
                    <p className="py-2 font-AlbertSans text-start font-bold text-primary text-base">
                      Organized by {item.partner_name}
                    </p>
                    <p className="py-2 font-AlbertSans text-start font-normal text-primary text-base">
                      {item.itinerary_short_description}
                    </p>
                  </div>
                  <div className="inline-flex justify-between items-center mt-4">
                    <div>
                      <p className="font-AlbertSans text-start font-light text-primary text-base">
                        Start from
                      </p>
                      <p className="pt-2 font-Unbounded text-start font-semibold text-tertiary text-2xl">
                        IDR{" "}
                        {formatCurrency(
                          parseInt(
                            item.related_variant.itinerary_variant_pub_price
                          )
                        )}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="text-primary px-10 h-14 content-center border-primary rounded-full border-2 font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-all mt-4 md:mt-0"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col mt-14 w-full">
            <div className="inline-flex items-stretch gap-6 overflow-x-auto">
              {repeatedDestinations.map((item, index) => (
                <div
                  className="flex flex-col justify-between w-[356px] flex-shrink-0"
                  key={index}
                >
                  <div className="items-center">
                    <Image
                      src={item.related_galleries[4].src}
                      alt={
                        item.related_galleries[4].gallery_alt_text ||
                        "Destination Image"
                      }
                      width={256}
                      height={236}
                      className="object-cover h-[236px] w-full"
                    />
                    <p className="mt-5 text-primary text-start text-sm font-light font-AlbertSans">
                      {formatDaysAndNights(item.itinerary_day)}
                    </p>
                    <p className="text-tertiary text-start text-base font-bold">
                      {item.itinerary_name}
                    </p>
                    <p className="text-primary text-start text-base font-bold">
                      Organized by {item.partner_name}
                    </p>
                  </div>
                  <div className="flex flex-col flex-grow justify-end">
                    <div className="mt-4">
                      <p className="font-AlbertSans text-start font-light text-primary text-sm">
                        Start from
                      </p>
                      <p className="font-Unbounded text-start font-semibold text-tertiary text-lg">
                        IDR{" "}
                        {formatCurrency(
                          parseInt(
                            item.related_variant.itinerary_variant_pub_price
                          )
                        )}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="text-primary mt-5 w-[120px] h-14 flex items-center justify-center border-primary rounded-full 
                      border-2 font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-end my-14 lg:my-0 lg:mt-14">
              <span className="text-primary inline-flex font-medium text-2xl font-AlbertSans items-center hover:text-secondary transition-all cursor-pointer">
                <Icon
                  icon="solar:round-alt-arrow-right-linear"
                  width={64}
                  className="pr-4"
                />
                Explore more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
