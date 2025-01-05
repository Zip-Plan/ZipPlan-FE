import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import marker from "../Images/marker.png";
import markerclick from "../Images/markerclick.png";
import {CustomOverlayMap, Map, MapMarker} from 'react-kakao-maps-sdk';
import { use } from "react";

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
`;

const Topbutton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5px;
    padding-top: 15px;
    font-size: 17px;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: gray;
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    color: ${(props) => (props.active ? "black" : "#777777")};
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    padding-bottom: 5px;
    width: 50%;

    &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: ${(props) => (props.active ? "1.5px" : "1px")};
        background-color: ${(props) => (props.active ? "black" : "#777777")};
        transition: all 0.3s ease;
    }
`;

const Mapinfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding-left: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #F2F2F2;
    padding-top: 8px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Mapbutton = styled.div`
    flex-shrink: 0;
    padding: 8px 10px;
    background-color: ${(props) => (props.active ? "#6B9CFA" : "#F2F4F8")};
    border-radius: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    color: ${(props) => (props.active ? "#ffffff" : "#000000")};
    cursor: pointer;
`;

const Mapsection = styled.div`
    position: relative; /* 지도의 기준 컨테이너를 설정 */
`;

const InfoSection = styled.div`
    position: absolute; /* 부모 요소(Mapsection)의 상대적 위치에 고정 */
    top: 10px; /* 지도 상단에서 10px 떨어짐 */
    left: 10px; /* 지도 좌측에서 10px 떨어짐 */
    z-index: 10; /* 지도 위에 표시되도록 z-index 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23vw;
    max-width: 400px;
    background-color: white;
    border: 1px solid #293B65;
    border-radius: 5px;
    overflow: hidden;
`;

const Title = styled.div`
    width: 100%;
    background-color: #293B65;
    color: white;
    text-align: center;
    padding: 5px 0;
    font-size: 16px;
`;

const Sub1 = styled.div`
    width: 100%;
    background-color: #ffffff;
    color: black;
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
    border-top: 1px solid #293B65;
`;

const Sub2 = styled.div`
    width: 100%;
    background-color: #F2F4F8;
    color: #6B9CFA;
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
`;

const Mymap = () => {
    const [activeButton, setActiveButton] = useState("map");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Topbar />
            <Wrapper>
                <Topbutton>
                    <Button
                        active={activeButton === "map"}
                        onClick={() => setActiveButton("map")}
                    >
                        지도
                    </Button>
                    <Button
                        active={activeButton === "price"}
                        onClick={() => setActiveButton("price")}
                    >
                        실시간가격변화
                    </Button>
                </Topbutton>
                <Mapinfo>
                    <Mapbutton active={true}>서울 강남구</Mapbutton>
                    <Mapbutton>주택 유형</Mapbutton>
                    <Mapbutton>보증금</Mapbutton>
                    <Mapbutton>월임대료</Mapbutton>
                    <Mapbutton>공급 면적</Mapbutton>
                </Mapinfo>
                <Mapsection>
                    {/* InfoSection을 지도 위에 고정 */}
                    <InfoSection>
                        <Title>주택유형</Title>
                        <Sub1>공급면적</Sub1>
                        <Sub2>기본보증금</Sub2>
                    </InfoSection>

                    <Map
                        level={2}
                        center={{ lat: 37.4979, lng: 127.0276 }}
                        style={{ width: "100%", height: "660px" }}
                    >
                        <MapMarker 
                            position={{lat:37.49729, lng:127.0274}}
                            image = {{
                                src: `${marker}`,
                                size: {
                                    width: 59,
                                    height: 59,
                                },
                                options: {
                                    offset : {
                                        x: 30,
                                        y:30,
                                    },
                                },
                            }}
                            clickable={true}
                            onMouseOver={
                                () => setIsOpen(true)
                            }
                            onMouseOut={
                                () => setIsOpen(false)
                            }
                        >
                            {isOpen && 
                                <div 
                                    style={{ 
                                        padding: "5px", 
                                        color: "#000", 
                                    }}
                                >
                                    Hello World
                                </div>
                            }
                        </MapMarker>
                    </Map>
                </Mapsection>
            </Wrapper>
            <Navbar />
        </>
    );
};

export default Mymap;
