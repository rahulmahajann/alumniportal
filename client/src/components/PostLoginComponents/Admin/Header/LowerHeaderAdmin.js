import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./LowerHeaderAdmin.css";
import { color2, color3 } from "../../../constants/colors";

function LowerHeaderAdmin() {
  const complete__lowerHeader = {
    background: `${color2}`,
    display: "flex",
    width: "100vw",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
  };

  const items__lowerHeader = {
    margin: "20px 10px",
    justifyContent: "center",
    alignItems: "center",
    // height: '100%'
  };

  const itemsLink__lowerHeader = {
    margin: "0 10px",
    color: `${color3}`,
    textDecoration: "none",
    height: "inherit",
  };

  const StyledContainer = styled.div`
    background: ${color2};
    display: flex;
    width: 100vw;
    flex-direction: row;
    flex-wrap: wrap;
    height: 45px;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      background-color: red;
    }
  `;

  const StyledHamBurger = styled.div`
    display: block;
    cursor: pointer;
    div {
      height: 2px;
      width: 20px;
      background: #000;
      margin: 2.5px 0;
    }
    margin-left: 20px;
  `;

  const StyledDrawer = styled.div`
    position: fixed;
    height: 100vh;
    width: 200px;
    background: ${color2};
  `;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const headerContent = [
    {
      id: "aboutUs",
      to: "/aboutus",
      text: "ABOUT US",
      children: [
        {
          text: "Vision & Mission",
          to: "/visionmission",
        },
      ],
    },
    {
      id: "newsRoom",
      to: "/newsroom",
      text: "NEWSROOM",
      children: [
        {
          text: "View NewsRoom",
          to: "/newsroom",
        },
        {
          text: "Add News",
          to: "/addnewsroom",
        },
      ],
    },
    {
      id: "members",
      to: "/members",
      text: "MEMBERS",
      children: [
        {
          text: "Approved Members",
          to: "/approvedmembers",
        },
        {
          text: "Pending Members",
          to: "/pendingmembers",
        },
      ],
    },
    {
      id: "events",
      to: "/events",
      text: "EVENTS",
    },
    {
      id: "gallery",
      to: "/gallery",
      text: "GALLERY",
    },
    {
      id: "engage",
      to: "/",
      text: "ENGAGE",
      children: [
        {
          text: "BE A MENTOR",
          to: "/mentor",
        },
        {
          text: "VOLUNTEER",
          to: "/volunteer",
        },
        {
          text: "SHARE ACHIEVEMENT",
          to: "/shareachievement",
        },
        {
          text: "SHARE OPPORTUNITY",
          to: "/shareopportunity",
        },
        {
          text: "INVITE FRIENDS",
          to: "/invitefriends",
        },
      ],
    },
    {
      id: "contactUs",
      to: "/contactusadmin",
      text: "CONTACT US",
    },
    {
      id: "alumniAssist",
      to: "/alumniassist",
      text: "ALUMNI ASSIST",
    },
  ];

  const isMobile = JSON.parse(localStorage.getItem("isMobile"));
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  function listHeaderContent() {
    return headerContent.map((content) => {
      const { id, to, text, children } = content;
      return (
        <div id={id} style={items__lowerHeader}>
          <Link style={itemsLink__lowerHeader} to={to}>
            {text}
          </Link>
          {children?.length && (
            <div className="hoverContent">
              {children.map((child) => {
                const { text, to } = child;
                return (
                  <Link className="hoverContentLink" to={to}>
                    {text}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  }

  return isTabletOrMobile ? (
    <div>
      <StyledHamBurger onClick={handleDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamBurger>
      {isDrawerOpen && <StyledDrawer>{listHeaderContent()}</StyledDrawer>}
    </div>
  ) : (
    <StyledContainer>{listHeaderContent()}</StyledContainer>
  );
}

export default LowerHeaderAdmin;
