import React from "react";
import mainLogo from "../../Images/Logo_home.png";
import search from "../../Images/Search_home.png";
import alarm from "../../Images/Alarm_home.png";
import styled from "styled-components";

const TopBarContainer = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  #logo {
    width: 30vw;
    height: 5vh;
  }

  #right-side {
    margin-top: 10px;
    margin-right: 10px;
  }

  #search {
    object-fit: cover;
    margin-right: 10px;
    width: 5.7vw;
    height: auto;
  }

  #alarm {
    object-fit: cover;
    width: 4vw;
    height: auto;
  }
`;

const HomeTopBar = () => {
  return (
    <TopBarContainer>
      <img id="logo" src={mainLogo} alt="Description" />
      <div id="right-side">
        <img id="search" src={search} alt="" />
        <img id="alarm" src={alarm} alt="" />
      </div>
    </TopBarContainer>
  );
};

export default HomeTopBar;
