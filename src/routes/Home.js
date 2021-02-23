import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};
