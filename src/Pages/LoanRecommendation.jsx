import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Topbar from "./Topbar"; // 상단바 컴포넌트

const LoanRecommendation = () => {
  return (
    <>
      <Topbar />
      <Wrapper>
        {/* 상단 타이틀 */}
        <Header>
          <Title>청담동앨리스님의 자산에</Title>
          <Highlight>적합한 대출 상품</Highlight>
          <SubTitle>을 찾았어요~!</SubTitle>
        </Header>

        {/* 대출 추천 카드 */}
        <RecommendationCard>
          <AnalysisLabel>
            빅데이터로 고객님의 자산을 분석해서 찾았어요!
          </AnalysisLabel>
          <LoanTitle>T 보금자리론 (SC제일은행)</LoanTitle>
          <LoanDetails>
            <Detail>
              <Label>금리</Label>
              <Value>연 3.15%~4.45%</Value>
            </Detail>
            <Detail>
              <Label>대출한도</Label>
              <Value>최대 3.6억원</Value>
            </Detail>
            <Detail>
              <Label>특징</Label>
              <Value>
                최대 3.6억원
                <br />
                다양한 우대금리
                <br />
                저소득층, 신혼부부, 생애최초구매자 등 최대 1.0% 우대
                <br />
                중도상환수수료 면제
                <br />
                추가혜택
              </Value>
            </Detail>
          </LoanDetails>
        </RecommendationCard>

        {/* 버튼 */}
        <Button>대출 시뮬레이션하기</Button>
      </Wrapper>

      {/* 네비게이션 바 */}
      <Navbar activeTab="simulation" />
    </>
  );
};

export default LoanRecommendation;

// Styled-components
const Wrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #2d2d2d;
  margin: 0;
`;

const Highlight = styled.span`
  font-size: 18px;
  color: #6b9cfa;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  color: #2d2d2d;
  margin: 0;
`;

const RecommendationCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const AnalysisLabel = styled.div`
  font-size: 12px;
  color: #ffffff;
  background-color: #6b9cfa;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const LoanTitle = styled.h3`
  font-size: 16px;
  color: #2d2d2d;
  text-align: center;
  margin-bottom: 20px;
`;

const LoanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Label = styled.span`
  font-size: 14px;
  color: #6d6e7d;
  flex: 1;
`;

const Value = styled.span`
  font-size: 14px;
  color: #2d2d2d;
  flex: 2;
  text-align: right;
  line-height: 1.4;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  background-color: #6b9cfa;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
