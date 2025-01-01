import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "./Topbar";
import emojiIcon from "../Images/emoji.png";
import Navbar from "./Navbar";

const TotalAssets = () => {
  const [totalAssets, setTotalAssets] = useState(30000000);
  const [monthlyIncome, setMonthlyIncome] = useState(4000000);
  const [savings, setSavings] = useState(4000000);
  const [expenses, setExpenses] = useState(4000000);

  return (
    <>
      <Topbar />
      <Wrapper>
        {/* 상단 환영 카드 */}
        <WelcomeCard>
          <TitleSection>
            <Title>청담동앨리스님 반가워요</Title>
            <Recommendation>
              <IconWrapper>
                <Icon src={emojiIcon} alt="Recommendation Icon" />
              </IconWrapper>
              <span>최적의 대출상품 추천해드릴까요?</span>
              <Arrow>&gt;</Arrow>
            </Recommendation>
          </TitleSection>
          <TotalAssetSection>
            <AssetTitle>총 자산</AssetTitle>
            <AssetAmount>{totalAssets.toLocaleString()} 원</AssetAmount>
          </TotalAssetSection>
          <Button onClick={() => alert("자산 연결하기")}>자산 연결하기</Button>
        </WelcomeCard>

        {/* 소득 카드 */}
        <DetailCard>
          <CardHeader>
            <CardTitle>소득</CardTitle>
            <LinkButton href="#!">불러오기</LinkButton>
          </CardHeader>
          <CardBody>
            <span>월 정기소득</span>
            <CardAmount>{monthlyIncome.toLocaleString()} 원</CardAmount>
          </CardBody>
        </DetailCard>

        {/* 저축 카드 */}
        <DetailCard>
          <CardHeader>
            <CardTitle>저축</CardTitle>
            <LinkButton href="#!">불러오기</LinkButton>
          </CardHeader>
          <CardBody>
            <span>총</span>
            <CardAmount>{savings.toLocaleString()} 원</CardAmount>
          </CardBody>
        </DetailCard>

        {/* 지출 카드 */}
        <DetailCard>
          <CardHeader>
            <CardTitle>지출</CardTitle>
            <LinkButton href="#!">불러오기</LinkButton>
          </CardHeader>
          <CardBody>
            <span>총</span>
            <CardAmount>{expenses.toLocaleString()} 원</CardAmount>
          </CardBody>
        </DetailCard>
      </Wrapper>
      <Navbar activeTab="simulation" /> {/* Navbar 컴포넌트 추가 */}
    </>
  );
};

export default TotalAssets;

// Styled-components
const Wrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: "Pretendard", sans-serif;
`;

const WelcomeCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #2d2d2d;
  line-height: 130%; /* 28.6px */
  letter-spacing: -0.44px;
  margin-bottom: 10px;
`;

const Recommendation = styled.div`
  display: flex;
  align-items: center;
  background-color: #6b9cfa;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Arrow = styled.span`
  margin-left: auto;
  font-size: 1.2rem;
`;

const TotalAssetSection = styled.div`
  background-color: #4579fb;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 20px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AssetTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

const AssetAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  cursor: pointer;
  margin-top: 15px;
`;

const DetailCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px; /* 기존 15px에서 줄임 */
  margin-bottom: 8px; /* 기존 10px에서 줄임 */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  font-size: 20px; /* 기존 22px에서 줄임 */
  font-weight: 600;
  color: #2d2d2d;
  line-height: 120%; /* 기존 130%에서 줄임 */
  letter-spacing: -0.4px; /* 기존 -0.44px에서 줄임 */
  margin-left: 10px;
  margin-right: 10px;
`;

const LinkButton = styled.a`
  font-size: 16px; /* 그대로 유지 */
  color: #4579fb;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const CardAmount = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #2d2d2d;
`;
