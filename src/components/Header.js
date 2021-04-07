import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = styled.div`
  padding: 10px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  background-color: black;
`;
const LOGO = styled(Link)`
  margin-left: 10px;
  color: #ff0358;
  font-size: 35px;
  font-weight: bold;
  text-decoration: none;
`;
const Desc = styled.div`
  position: absolute;
  right: 20px;
  color: grey;
`;

const Head = () => {
  return (
    <Header>
      <LOGO to={`/`}>Witcher</LOGO>
      <Desc>built with Apollo, React, GraphQL 😎</Desc>
    </Header>
  );
};
export default Head;
