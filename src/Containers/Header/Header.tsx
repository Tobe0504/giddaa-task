import classes from "./Header.module.css";
import logo from "../../Assets/Images/logo.png";
import Input from "../../Components/Input/Input";
import { headerNavItems } from "../../Utilities/navitems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

const Header = () => {
  //   Router
  const location = useLocation();
  const navigate = useNavigate();

  // Refs
  const sideNav = useRef<HTMLDivElement>(null);

  // Utils
  const openSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "0%";
    }
  };

  return (
    <section className={classes.container}>
      <img src={logo} alt="Giddaa Logo" />
      <div className={classes.inputSection}>
        <Input placeholder="Search For Properties, Developers, Banks" />
      </div>

      <div className={classes.routesSection}>
        {headerNavItems.map((navItem, i) => {
          return (
            <Link
              to={navItem?.route}
              className={
                location.pathname === navItem.route
                  ? classes.active
                  : classes.inActive
              }
              key={i}
            >
              <span> {navItem?.title}</span>
              <span></span>
            </Link>
          );
        })}
      </div>
      <div
        className={`${classes.notificationsSection} ${
          location.pathname === "/notifications"
            ? classes.notificationIsActive
            : classes.notificationIsInactive
        }`}
        onClick={() => {
          navigate("/notifications");
        }}
      >
        <NotificationsNoneIcon
          fontSize="medium"
          color="inherit"
          style={{
            color: location.pathname === "/notifications" ? "#335F32" : "#fff",
          }}
        />
        <span>2</span>
      </div>

      <div className={classes.hamburgerMenu} onClick={openSideNav}>
        <MenuIcon />
      </div>

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} isHome />
      </div>
    </section>
  );
};

export default Header;
