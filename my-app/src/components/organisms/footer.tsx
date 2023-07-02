import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className={"foot"}>
        Sharpen your problem solving skills with Algorithm Spot
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  width: 100%;
  grid-row: 3;
  .foot {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Footer;
