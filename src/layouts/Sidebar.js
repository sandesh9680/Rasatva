import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
// import "../assets/scss/layout/_sidebar.scss";
// import "../assets/scss/_variables.scss";
// import "../assets/scss/style.scss";
// import "../assets/scss/layout/_container.scss";
import user2 from "../assets/images/users/user.png";
 import user3 from "../assets/images/users/logo3.png";
// import user5 from "../assets/logos/audiences-icon.svg";
// import user6 from "../assets/logos/psychology-icon.svg";
// import user7 from "../assets/logos/channel-icon.svg";
// import user8 from "../assets/logos/brand-icon.svg";
// import user9 from "../assets/logos/Funnels-icon.svg";
// import user10 from "../assets/logos/consumers-icon.svg";
// import user11 from "../assets/logos/hubspot-icon.svg";


const navigation = [
  {
    title: "Account details",
    href: "/account-details",
    icon: "../assets/img/dashboard-icon.svg",
  },
  

  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },

  {
    title: "My orders",
    href: "/my-order",
    icon: "../assets/images/logos/consumers-icon.svg",
  },

  {
    title: "Wishlist (0)",
    href: "/wishlist",
    icon: "../assets/images/logos/audiences-icon.svg",
  },

  {
    title: "Membership status",
    href: "/membership",
    icon: "../assets/images/logos/brand-icon.svg",
  },

  {
    title: "Points",
    href: "/points",
    icon: "../assets/images/logos/channel-icon.svg",
  },

  {
    title: "Testimonials",
    href: "/testimonial",
    icon: "../assets/images/logos/consumers-icon.svg",
  },
  {
    title: "Reviews",
    href: "/review",
    icon: "../assets/images/logos/consumers-icon.svg",
  },
  {
    title: "Settings",
    href: "/compaigns",
    icon: "../assets/images/logos/consumers-icon.svg",
  },


];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className=" align-items-center">
        {/* <Logo /> */}
        <img
              src={user2}
              alt="profile"
              className="rounded-circle"
            ></img>
            <div className="username_logout">
            <h4>User Name</h4>
            <h5>Log Out</h5>
            </div>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg ">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3 active"
                    : "nav-link text-secondary py-3"
                }
              >
                {/* <i className={navi.icon}></i> */}
                <img src={navi.icon} />
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};


export default Sidebar;


