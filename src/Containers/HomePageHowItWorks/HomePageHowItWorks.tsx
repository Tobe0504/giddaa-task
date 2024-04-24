import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageHowItWorks.module.css";
import play from "../../Assets/Images/play.png";
import { useState } from "react";
import VideoModal from "../../Components/Modals/AcceptedModal/VideoModal";
import HowItWorksVideo from "./HowItWorksVideo";

const HomePageHowItWorks = () => {
  const howItWorks = [
    {
      title: "Find Your Dream Home.",
      description:
        "Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction",
    },
    {
      title: "Select A Plan.",
      description:
        "Choose the best way YOU want to buy your dream home. We do most of the hardwork by automatically calculating which properties you are able to afford, as long as you put in your correct age and income.",
    },
    {
      title: "Book A Viewing",
      description:
        "We give you several options to book a viewing for the property. You can view it yourself, with our agent (for a small fee), or use someone you trust, maybe a family member or close friend. Choose a date and time and book your viewing.",
    },
    {
      title: "Apply!",
      description:
        "After you have booked a viewing and you are satisfied with the viewing, you acknowledge having viewed the property and then proceed to submit the document required by the organzation you are applying to.",
    },
    {
      title: "Wait For Application Processing",
      description:
        "The partner (Developer or Bank) you applied to will process your application and the submitted documents. You will be notified if your application is accepted or not.",
    },
    {
      title: "Accept Terms & Make Payment",
      description:
        "If the partner accepts your application, they will submit the terms of your application and an offer letter or a term sheet for you to review. If you accept the terms, you can then proceed to make payment and create a mandate for repayment, if it is a mortgage or payment plan.",
    },
  ];

  //   States
  const [showModal, setShowModal] = useState(false);
  return (
    <section className={classes.container}>
      {showModal && (
        <VideoModal
          onClick={() => {
            setShowModal(false);
          }}
          body={<HowItWorksVideo />}
        />
      )}

      <SectionHeader title="How It Works" />

      <div className={classes.howItWorksContainer}>
        {howItWorks.map((data, i) => {
          return (
            <div className={classes.how} key={i}>
              <div>{i + 1}</div>
              <div>
                <h4>{data.title}</h4>
                <p>{data.description}</p>

                <div
                  className={classes.videoSection}
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <img src={play} alt="WATCH THE VIDEO TO LEARN MORE" />
                  <span>WATCH THE VIDEO TO LEARN MORE</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePageHowItWorks;
