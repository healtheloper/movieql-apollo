import React from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
const LOGO = styled.div`
  margin-left: 10px;
  color: #ff0358;
  font-size: 35px;
  font-weight: bold;
`;
const Desc = styled.div`
  position: absolute;
  right: 20px;
  color: grey;
`;

const Head = () => {
  return (
    <Header>
      <LOGO>Witcher</LOGO>
      <Desc>built with Apollo, React, GraphQL 😎</Desc>
    </Header>
  );
};
export default Head;
