import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 100px);
`;
const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <List>
      {loading && <Loading> Loading...</Loading>}
      {data &&
        data.movies.map((m) => <Movie key={m.id} id={m.id} {...m}></Movie>)}
    </List>
  );
};
