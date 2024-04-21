import Layout from "../Components/Layout/Layout";
import HomePageHeroSection from "../Containers/HomePageHeroSection/HomePageHeroSection";
import HomePageStats from "../Containers/HomePageStats/HomePageStats";

const HomePage = () => {
  return (
    <Layout>
      <HomePageHeroSection />
      <HomePageStats />
    </Layout>
  );
};

export default HomePage;
