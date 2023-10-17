import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <HomepageStyle>
      This is the home page Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Earum inventore nemo nisi sequi velit! Beatae cum dolorum.
    </HomepageStyle>
  );
};

const HomepageStyle = styled.div`
  display: flex;
  justify-content: center;
  background: rosybrown;
`;

export default Homepage;
