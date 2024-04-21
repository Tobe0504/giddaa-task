import Layout from "../Components/Layout/Layout";
import HomePageHeroSection from "../Containers/HomePageHeroSection/HomePageHeroSection";
import HomePagePurchaseOptions from "../Containers/HomePagePurchaseOptions/HomePagePurchaseOptions";
import HomePageStaff from "../Containers/HomePageStaff/HomePageStaff";
import HomePageStats from "../Containers/HomePageStats/HomePageStats";
import HomePageTrustedBy from "../Containers/HomePageTrustedBy/HomePageTrustedBy";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHeroSection />
      <HomePageStats />
      <HomePageTrustedBy />
      <HomePageStaff />
      <HomePagePurchaseOptions />
    </Layout>
  );
};

export default HomePage;
