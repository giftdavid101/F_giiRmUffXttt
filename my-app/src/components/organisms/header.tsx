import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyle>
          Header
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
width: 100%;
  background: #70798C;
grid-row: 1;
`;

export default Header;