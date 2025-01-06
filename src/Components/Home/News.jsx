import React from "react";
import styled from "styled-components";
import NewsBannerImage from "../../Images/NewsBanner.png";
import BannerFooterIcon from "../../Images/footer_icon.png";
const S = {
  NewsContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px;
    gap: 8px;
  `,
  NewsHead: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    & > span:nth-child(1) {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
      font-size: 16.779px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.02em;

      color: #232937;
    }
    & > span:nth-child(2) {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 500;
      font-size: 14.9147px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.02em;

      color: #838383;
    }
  `,
  NewsBanner: styled.div`
    background-color: #a9bde3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    border-radius: 4px;
    gap: 16px;
    padding: 16px;
    box-sizing: border-box;
    background-image: url(${NewsBannerImage});
    background-repeat: no-repeat;
    background-position: right center;
    & > span:nth-child(1) {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 15px;

      letter-spacing: -0.025em;

      color: #e2ecff;
    }
    & > span:nth-child(2) {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 25px;

      letter-spacing: -0.025em;

      color: #ffffff;
    }
    & > span:nth-child(3) {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;

      letter-spacing: -0.025em;

      color: #e2ecff;
    }
  `,
  NewsFooter: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  FooterItem: styled.div`
    padding: 12px;
    border-radius: 999px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Ballon: styled.div`
    position: relative;
    display: inline-block;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px 16px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 13.0289px;
    line-height: 15px;
    /* identical to box height, or 114% */
    letter-spacing: -0.025em;

    color: #2f75fc;

    /* 말풍선 꼬리 */
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 10px 0;
      border-color: transparent #ffffff transparent transparent; /* 꼬리 색상 */
    }
  `,
};
const News = () => {
  return (
    <S.NewsContainer>
      <S.NewsHead>
        <span>부동산 뉴스</span>
        <span>전체보기</span>
      </S.NewsHead>
      <S.NewsBanner>
        <span>전월세 보증금 대출</span>
        <span>
          누구나 쉽게
          <br />
          언제 어디서든 가능해요
        </span>
        <span>나에게 맞는 대출은?</span>
      </S.NewsBanner>
      <S.NewsFooter>
        <S.FooterItem>
          <img src={BannerFooterIcon} alt="" />
        </S.FooterItem>
        <S.Ballon>알림 설정하고 부동산 정책소식 받기</S.Ballon>
      </S.NewsFooter>
    </S.NewsContainer>
  );
};

export default News;
