import Layout from "../Components/Layout/Layout";
import HomePageGetStarted from "../Containers/HomePageGetStarted/HomePageGetStarted";
import HomePageHeroSection from "../Containers/HomePageHeroSection/HomePageHeroSection";
import HomePageHowItWorks from "../Containers/HomePageHowItWorks/HomePageHowItWorks";
import HomePagePurchaseOptions from "../Containers/HomePagePurchaseOptions/HomePagePurchaseOptions";
import HomePageStaff from "../Containers/HomePageStaff/HomePageStaff";
import HomePageStats from "../Containers/HomePageStats/HomePageStats";
import HomePageTrustedBy from "../Containers/HomePageTrustedBy/HomePageTrustedBy";
import HomePageWhoWeServe from "../Containers/HomePageWHoWeServe/HomePageWHoWeServe";
import HomePageWhyGiddaa from "../Containers/HomePageWhyGiddaa/HomePageWhyGiddaa";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHeroSection />
      <HomePageStats />
      <HomePageTrustedBy />
      <HomePageStaff />
      <HomePagePurchaseOptions />
      <HomePageWhyGiddaa />
      <HomePageWhoWeServe />
      <HomePageHowItWorks />
      <HomePageGetStarted />
    </Layout>
  );
};

export default HomePage;
