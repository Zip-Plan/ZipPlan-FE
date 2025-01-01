import React from "react";
import styled from "styled-components";

// SVG 아이콘 컴포넌트
const HomeIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill={fill}
  >
    <path d="M0.988647 6.5523C0.988647 5.40937 1.64776 4.36892 2.68112 3.88062L10.3088 0.276258C11.108 -0.101434 12.0344 -0.101433 12.8337 0.276258L20.4613 3.88062C21.4947 4.36892 22.1538 5.40937 22.1538 6.5523V18.3944C22.1538 20.0264 20.8308 21.3493 19.1989 21.3493H3.9436C2.31163 21.3493 0.988647 20.0264 0.988647 18.3944V6.5523Z" />
  </svg>
);

const MyIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="19"
    viewBox="0 0 23 19"
    fill={fill}
  >
    <path d="M20.6217 16.3965H22.6374V18.3664H0.464355V16.3965H2.48009V1.6217C2.48009 1.36047 2.58627 1.10993 2.77528 0.925214C2.96429 0.740494 3.22065 0.636719 3.48795 0.636719H13.5666C13.8339 0.636719 14.0903 0.740494 14.2793 0.925214C14.4683 1.10993 14.5745 1.36047 14.5745 1.6217V16.3965H18.6059V8.5166H16.5902V6.54663H19.6138C19.8811 6.54663 20.1374 6.6504 20.3265 6.83512C20.5155 7.01984 20.6217 7.27038 20.6217 7.53161V16.3965ZM4.49582 2.60669V16.3965H12.5587V2.60669H4.49582ZM6.51154 8.5166H10.543V10.4866H6.51154V8.5166ZM6.51154 4.57666H10.543V6.54663H6.51154V4.57666Z" />
  </svg>
);

const SimulationIcon = ({ fill }) => (
  <div style={{ position: "relative", width: "23px", height: "28px" }}>
    {/* 지붕 부분 */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="5"
      viewBox="0 0 20 5"
      fill="none"
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.89807 0.683594L0.5979 2.71312V4.67797L9.89807 2.64844L19.1982 4.67797V2.71312L9.89807 0.683594Z"
        fill={fill}
      />
    </svg>
    {/* 아래 박스 부분 */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill={fill}
      style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <rect
        x="0.823486"
        y="0.40625"
        width="19.6496"
        height="15.0288"
        rx="2.95495"
      />
    </svg>
  </div>
);

const CommunityIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill={fill}
  >
    <path d="M17.9881 23.5006C20.0042 23.2334 21.9505 22.3428 23.5003 20.8282C27.2633 17.1506 27.2633 11.188 23.5003 7.51043C19.7373 3.83285 13.6362 3.83285 9.87322 7.51043C6.11021 11.188 6.11021 17.1506 9.87322 20.8282C10.1499 21.0985 10.4393 21.3489 10.7392 21.5795L10.1491 22.1563C9.50584 22.7849 9.9903 23.8579 10.899 23.8173L17.9881 23.5006Z" />
    <ellipse cx="13.9984" cy="14.8591" rx="0.851055" ry="0.831734" />
    <ellipse cx="16.5515" cy="14.8591" rx="0.851055" ry="0.831734" />
    <ellipse cx="19.1075" cy="14.8591" rx="0.851055" ry="0.831734" />
  </svg>
);

const MyProfileIcon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    viewBox="0 0 17 21"
    fill={fill}
  >
    <ellipse cx="8.29603" cy="5.11547" rx="4.53882" ry="4.43578" />
    <path d="M0.125977 18.5698C0.125977 14.0784 3.80453 10.4375 8.29586 10.4375C12.7872 10.4375 16.4657 14.0784 16.4657 18.5698C16.4657 19.468 15.7376 20.1962 14.8393 20.1962H1.75243C0.854163 20.1962 0.125977 19.468 0.125977 18.5698Z" />
  </svg>
);

// 스타일링
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  color: ${(props) => (props.active ? "#6B9CFA" : "#6D6E7D")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;

  svg {
    margin-bottom: 5px;
  }
`;

// 네비게이션 바 컴포넌트
const Navbar = ({ activeTab = "" }) => {
  return (
    <NavbarWrapper>
      <NavItem active={activeTab === "home"}>
        <HomeIcon fill={activeTab === "home" ? "#6B9CFA" : "#6D6E7D"} />
        <span>Home</span>
      </NavItem>
      <NavItem active={activeTab === "my"}>
        <MyIcon fill={activeTab === "my" ? "#6B9CFA" : "#6D6E7D"} />
        <span>마이</span>
      </NavItem>
      <NavItem active={activeTab === "simulation"}>
        <SimulationIcon
          fill={activeTab === "simulation" ? "#6B9CFA" : "#6D6E7D"}
        />
        <span>시뮬레이션</span>
      </NavItem>
      <NavItem active={activeTab === "community"}>
        <CommunityIcon
          fill={activeTab === "community" ? "#6B9CFA" : "#6D6E7D"}
        />
        <span>커뮤니티</span>
      </NavItem>
      <NavItem active={activeTab === "profile"}>
        <MyProfileIcon fill={activeTab === "profile" ? "#6B9CFA" : "#6D6E7D"} />
        <span>MY</span>
      </NavItem>
    </NavbarWrapper>
  );
};

export default Navbar;
