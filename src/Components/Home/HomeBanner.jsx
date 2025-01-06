import React from "react";
import styled from "styled-components";
import HomeTopBar from "./HomeTopBar";
import LocationSelect from "./LocationSelect";
import searchIcon from "../../Images/Search_solid.png";
import HouseInfo from "./HouseInfo";
const S = {
  BannerContainer: styled.div`
    background-color: #6b9cfa;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
  `,
  Search: styled.div`
    padding: 20px 0;
    box-sizing: border-box;

    width: 100%;
    background: #84aeff;
    border-radius: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    & > span {
      font-family: "SUIT";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;

      color: #fff4e1;
    }
  `,
};
const HomeBanner = () => {
  return (
    <S.BannerContainer>
      <HomeTopBar />
      <LocationSelect />
      <S.Search>
        <img id="search" src={searchIcon} alt="" />
        <span>어떤집을 찾고 계신가요?</span>
      </S.Search>
      <HouseInfo />
    </S.BannerContainer>
  );
};

export default HomeBanner;
