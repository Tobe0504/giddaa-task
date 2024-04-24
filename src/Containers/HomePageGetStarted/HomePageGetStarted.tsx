import Button from "../../Components/Button/Button";
import classes from "./HomePageGetStarted.module.css";

const HomePageGetStarted = () => {
  return (
    <div className={classes.container}>
      <h4>Get Started</h4>
      <p>
        We are on a mission to empower income earning Nigerians to own their
        first homes before they turn 50 years old. Create an account and join
        the mission. It’s gonna be a long but fulfilling ride. Let’s Go! 🏎️
      </p>
      <Button>Create an Account</Button>
    </div>
  );
};

export default HomePageGetStarted;
