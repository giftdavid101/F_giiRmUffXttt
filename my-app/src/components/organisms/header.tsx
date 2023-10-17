import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <div className={"container"}>
        <span className={"frux"}>Frux</span>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  display: flex;
  align-items: center;

  .frux {
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-size: 30px;
  }
`;

export default Header;
