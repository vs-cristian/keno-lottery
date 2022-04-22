import React from "react";
import styled from "styled-components";
import phoneSrc from "../images/phone.png";

const Container = styled.div`
  position: relative;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) -4rem 2rem 3rem);
  overflow: hidden;
`;

const PhoneImage = styled.img`
  height: calc(100vh - 12.8rem);
  position: relative;
  z-index: 1;
  pointer-events: none;
`;

const PhoneContent = styled.div`
  background: #4040c1;
  position: absolute;
  inset: 2% 5%;
  border-radius: 5%;
  padding: 9% 1% 1%;
  color: #fefcff;
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
