import classes from "./Footer.module.css";
import whatsappCommunity from "../../Assets/Images/whatsappCommunity.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import EastIcon from "@mui/icons-material/East";
import { footerNavItems } from "../../Utilities/navitems";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.communitySection}>
          <img src={whatsappCommunity} alt="Join Our WhatsApp Community" />

          <div>
            <img src={whatsapp} alt="Join Our WhatsApp Community" />
            <span>Join Our WhatsApp Community</span>
            <EastIcon />
          </div>
        </div>

        <div className={classes.routesSection}>
          {footerNavItems.map((data, i) => {
            return (
              <div key={i} className={classes.routes}>
                <h4>{data.title}</h4>
                <div className={classes.otherOptions}>
                  {data?.otherOptions?.map((datum, j) => {
                    return (
                      <Link
                        to={datum.route}
                        className={`${
                          datum.isPriority
                            ? classes.priority
                            : classes.notPriority
                        }`}
                        key={j}
                      >
                        {datum.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.bottomSection}>PROPERTY OF GIDDAA INC.</div>
    </section>
  );
};

export default Footer;
