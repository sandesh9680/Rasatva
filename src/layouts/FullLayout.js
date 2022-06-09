import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./loader/loader.scss";
import { Container } from "reactstrap";
import HeaderLayout from "../components/Header/HeaderLayout";
import Footer from "../components/Footer/Footer";
// C:\Users\Asus\OneDrive\Desktop\Rasatva_App\my-app\src\assets\scss\layout\_container.scss

const FullLayout = () => {
  return (
    <main>
      
      <HeaderLayout/>
      <div className="backimage account-form-info">
      <div className="container">
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          {/* <Header /> */}
          {/********Middle Content**********/}

          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
      </div>
      </div>
     <Footer/>
    </main>
  );
};

export default FullLayout;
