import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div className={"foot"}>
        Sharpen your problem solving skills with{" "}
        <a href={"#"}>
          {" "}
          <span className={"algorithm-spot"}>Algorithm Spot</span>
        </a>
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

  .algorithm-spot {
    margin: 0 6px;
    cursor: pointer;
    padding: 5px 3px;
    font-weight: 600;

    :hover {
      color: #fff;
      background: #9066ba;
    }
  }
`;
export default Footer;
