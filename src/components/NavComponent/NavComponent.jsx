import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavComponent.css";
import NavPartnersModal from "./NavModals/NavPartnersModal";
import NavProductsModal from "./NavModals/NavProductsModal";
import NavResourcesModal from "./NavModals/NavResourcesModal";
import NavSolutionsModal from "./NavModals/NavSolutionsModal";
import NavWhyusModal from "./NavModals/NavWhyusModal";
function NavComponent() {
  const navigate = useNavigate();
  const activeNavValues = {
    products: false,
    solutions: false,
    whyus: false,
    partners: false,
    resources: false,
  };
  const [activeNav, setActiveNav] = useState(activeNavValues);
  const clickhandler = (e) => {
    setActiveNav({
      ...activeNavValues,
      [e.target.id]: !activeNav[e.target.id],
    });
    // console.log(e.target.id);
  };

  const modalClickHandler = () => {
    setActiveNav(activeNavValues);
  };
  const downArrow = <span class="material-symbols-outlined">expand_more</span>;
  const upArrow = <span class="material-symbols-outlined">expand_less</span>;

  activeNav.products ||
  activeNav.solutions ||
  activeNav.whyus ||
  activeNav.partners ||
  activeNav.resources
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <>
      <div className="nav-container">
        <div className="nav-main">
          <div
            className="nav-logo noselect"
            onClick={() => {
              navigate("./");
            }}
          >
            {" "}
            Thetesseract
          </div>
          <div className="nav-links">
            <div
              id="products"
              className="nav-link noselect"
              onClick={clickhandler}
            >
              Products
              {activeNav.products ? upArrow : downArrow}
            </div>
            <div
              id="solutions"
              className="nav-link noselect"
              onClick={clickhandler}
            >
              Solutions
              {activeNav.solutions ? upArrow : downArrow}
            </div>
            <div
              id="whyus"
              className="nav-link noselect"
              onClick={clickhandler}
            >
              Why us
              {activeNav.whyus ? upArrow : downArrow}
            </div>
            <div
              id="partners"
              className="nav-link noselect"
              onClick={clickhandler}
            >
              Partners
              {activeNav.partners ? upArrow : downArrow}
            </div>
            <div className="nav-link noselect">Pricing</div>
            <div
              id="resources"
              className="nav-link noselect"
              onClick={clickhandler}
            >
              Resources
              {activeNav.resources ? upArrow : downArrow}
            </div>
          </div>
          <div className="nav-buttons">
            <input
              type="button"
              className="button-outline noselect"
              value="Start your free trail"
            />
            <input
              type="button"
              className="button-primary noselect"
              value="Request a demo"
            />
          </div>
        </div>
      </div>
      <div className="nav-modals">
        {activeNav.products && (
          <div className="Modal-container" onClick={modalClickHandler}>
            <div className="Modal-content">
              <NavProductsModal />
            </div>
          </div>
        )}
        {activeNav.solutions && (
          <div className="Modal-container" onClick={modalClickHandler}>
            <div className="Modal-content">
              <NavSolutionsModal />
            </div>
          </div>
        )}
        {activeNav.whyus && (
          <div className="Modal-container" onClick={modalClickHandler}>
            <div className="Modal-content">
              <NavWhyusModal />
            </div>
          </div>
        )}
        {activeNav.partners && (
          <div className="Modal-container" onClick={modalClickHandler}>
            <div className="Modal-content">
              <NavPartnersModal />
            </div>
          </div>
        )}
        {activeNav.resources && (
          <div className="Modal-container" onClick={modalClickHandler}>
            <div className="Modal-content">
              <NavResourcesModal />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavComponent;
