import React from "react";
import styled from "styled-components";
import phoneSrc from "../images/phone.png";

const Container = styled.div`
  @media (min-width: 430px) {
    position: relative;
    filter: drop-shadow(rgba(0, 0, 0, 0.6) -4rem 2rem 3rem);
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
  }
`;

const PhoneImage = styled.img`
  display: none;

  @media (min-width: 430px) {
    display: block;
    height: calc(100vh - 12.8rem);
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
`;

const PhoneContent = styled.div`
  position: absolute;
  background: #4040c1;
  color: #fefcff;
  inset: 0;

  @media (min-width: 430px) {
    inset: 2% 5%;
    border-radius: 5%;
    padding: 9% 1% 1%;
  }
`;

type Props = {
  children?: React.ReactNode;
};

const Phone = ({ children }: Props) => {
  return (
    <Container>
      <PhoneImage src={phoneSrc} alt="phone background" />
      <PhoneContent>{children}</PhoneContent>
    </Container>
  );
};

export default Phone;
