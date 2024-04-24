import Button from "../../Components/Button/Button";
import classes from "./HomePageHeroSection.module.css";
import heroSection from "../../Assets/Images/heroSection.png";
import { useNavigate } from "react-router-dom";

const HomePageHeroSection = () => {
  // Router
  const navigate = useNavigate();
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>
          Securely and Affordably Own a Home in Nigeria.
          <span>We Serve Nigerians Across the Globe.</span>
        </h1>
        <p>
          Experience confidence when buying a home in Nigeria whether you’re in
          Nigeria or <span>Abroad!</span> Enjoy peace of mind with legitimate
          transactions, straightfoward processes, and a variety of flexible
          payment options directly from top developers and banks.
        </p>
        <div className={classes.buttonSection}>
          <Button
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Find a Home
          </Button>
          <Button type="secondary">10,000 People Have Seen This</Button>
        </div>
      </div>
      <div className={classes.imageSection}>
        <img src={heroSection} alt="Find a home" />
      </div>
    </section>
  );
};

export default HomePageHeroSection;
