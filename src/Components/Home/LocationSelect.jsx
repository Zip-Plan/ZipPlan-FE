import React from "react";
import styled from "styled-components";

const S = {
  SelectContainer: styled.div`
    background-color: #6b9cfa;
    position: relative;
    width: 150px;
  `,
  SelectBox: styled.select`
    outline: none;
    background-color: #6b9cfa;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: white;
    border: none;
    padding: 10px 20px 10px 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    &:focus {
      outline: none;
    }

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 22.372px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.025em;

    color: #ffffff;
  `,
  SelectArrow: styled.div`
    position: absolute;
    top: 35%;
    right: 0;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
    color: white;
    width: 24px;
    height: 24px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #ffffff;
  `,
};

const LocationSelect = () => {
  return (
    <S.SelectContainer>
      {/* 추후 변수로 수정 */}
      <S.SelectBox>
        <option value="서울 강남구">서울 강남구</option>
        <option value="서울 종로구">서울 종로구</option>
        <option value="서울 서초구">서울 서초구</option>
      </S.SelectBox>
      <S.SelectArrow>⌵</S.SelectArrow>
    </S.SelectContainer>
  );
};

export default LocationSelect;
