import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageWhyGiddaa.module.css";
import stay from "../../Assets/Images/stay.png";
import streamline from "../../Assets/Images/streamline.png";
import multiple from "../../Assets/Images/multiple.png";
import pay from "../../Assets/Images/pay.png";
import find from "../../Assets/Images/find.png";
import apply from "../../Assets/Images/find.png";
import see from "../../Assets/Images/see.png";
import manage from "../../Assets/Images/manage.png";

const HomePageWhyGiddaa = () => {
  // Utils
  const reasons = [
    {
      complaint: "I was scammed, by my wife!",
      personnel: "~ DIASPORAN LIVING IN IRELAND",
    },
    {
      complaint: "The form was too long!",
      personnel: "~ GOVERNMENT WORKER IN ABUJA",
    },
    {
      complaint: "I can’t track my repayments",
      personnel: "~ NGO WORKER WHO RECENTLY PURCHASED AN APARTMENT.",
    },
    {
      complaint:
        "They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.",
      personnel: "~ SOMEONE IN CANADA",
    },
    {
      complaint:
        "They gave me a housing list on paper to find the house. In today’s tech world? Haba!",
      personnel: "~ MORTGAGE SEEKER IN ABUJA, NIGERIA.",
    },
  ];

  const why = [
    {
      image: stay,
      title: "Stay Scam Free!",
      description:
        "We partner directly with trusted banks and developers. Your applications are sent straight to them, eliminating the need for agents, close relatives or friends. We connect you directly to the source.",
    },
    {
      image: streamline,
      title: "Streamline Your Search",
      description:
        "We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.",
    },
    {
      image: multiple,
      title: "Multiple Purchase Options",
      description:
        "We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.",
    },
    {
      image: pay,
      title: "Pay Online & Track All Payments",
      description:
        "Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.",
    },
    {
      image: find,
      title: "Find What You Can Afford",
      description:
        "We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.",
    },
    {
      image: apply,
      title: "Apply Online — in 5 Mins, and Track Your Application.",
      description:
        "On Giddaa, we don’t tell you to fill a form and we will get back to you. You can apply for your home 100% online and track your application as it is being processed by the developer or bank.",
    },
    {
      image: see,
      title: "See It For Yourself — Virtual Viewings",
      description:
        "Living abroad? We offer a service that allows you to view the property through a video call. We also send a report of the condition of the property after the viewing. We’re not quite at the VR level yet. 😁",
    },
    {
      image: manage,
      title: "Manage Terms and Documentation",
      description:
        "All terms between you and the developer or bank are managed online. You can view the terms you’ve offered, send revisions, if need be all online. You can also view and manage important documents like offer letters online.",
    },
  ];
  return (
    <section className={classes.container}>
      <SectionHeader title="Why Giddaa?" />

      <p>
        Too many Nigerians at home and abroad have complained about scams,
        inavailabilty of flexible payment options, how stressful, ambiguous, and
        manual the property purchase process is, we heard you all,{" "}
        <span>over 100+ of you!</span>
      </p>

      <div className={classes.reasonSection}>
        {reasons.map((data, i) => {
          return (
            <div key={i} className={classes.reason}>
              <h4>" {data.complaint}</h4>
              <p>{data.personnel}</p>
            </div>
          );
        })}
      </div>

      <div className={classes.whyContainer}>
        <h4>Here’s Why!</h4>

        <div className={classes.whySection}>
          {why.map((data, i) => {
            return (
              <div className={classes.why} key={i}>
                <img src={data.image} alt={data.title} />
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePageWhyGiddaa;
