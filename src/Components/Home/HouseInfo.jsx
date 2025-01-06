import React from "react";
import styled from "styled-components";
import apartment from "../../Images/apartment.png";
import house from "../../Images/house.png";
import officetel from "../../Images/officetel.png";
const S = {
  InfoContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
  `,
  Info: styled.div`
    background: #7ba8ff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    gap: 4px;
    & > img {
      width: 32px;
      height: 42px;
    }
    .name {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.02em;

      color: #ffffff;
    }
    .number {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.02em;

      color: #ffffff;
    }
  `,
};
const HouseInfo = () => {
  return (
    <S.InfoContainer>
      <S.Info>
        <img src={apartment} alt="" />
        <span className="name">아파트</span>
        <span className="number">39건</span>
      </S.Info>
      <S.Info>
        <img src={house} alt="" />
        <span className="name">주택</span>
        <span className="number">26건</span>
      </S.Info>
      <S.Info>
        <img src={officetel} alt="" />
        <span className="name">오피스텔</span>
        <span className="number">4건</span>
      </S.Info>
    </S.InfoContainer>
  );
};

export default HouseInfo;
