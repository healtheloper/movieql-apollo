import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Item = styled.li`
  position: relative;
  height: 100%;
  width: 200px;
`;
const Poster = styled.div`
  background: url(${(props) => props.bg}) 100% no-repeat;
  background-size: 100%;
  width: 100%;
  height: 345px;
`;
const Title = styled.span`
  position: absolute;
  bottom: ${(props) => (props.length > 25 ? "-20px" : "-5px")};
`;
const Movie = ({ id, title, medium_cover_image }) => {
  return (
    <>
      <Item>
        <Link to={`/${id}`}>
          <Poster bg={`${medium_cover_image}`}></Poster>
        </Link>
        <Title length={title.length}>{title}</Title>
      </Item>
    </>
  );
};

export default Movie;
