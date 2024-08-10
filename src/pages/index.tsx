import Head from "next/head";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import DestinationSection from "@/components/DestinationSection";
import LuxuryFootagesSection from "@/components/LuxuryFootagesSection";
import OtherInformationSection from "@/components/OtherInformationSection";
import ArticleSection from "@/components/ArticleSection";
import FooterSection from "@/components/FooterSection";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Zamrood - Beyond Expectation</title>
      </Head>
      <HeaderSection />
      <HeroSection />
      <ExperienceSection />
      <DestinationSection />
      <LuxuryFootagesSection />
      <OtherInformationSection />
      <ArticleSection />
      <FooterSection />
    </div>
  );
};

export default Home;
