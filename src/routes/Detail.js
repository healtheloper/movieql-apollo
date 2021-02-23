import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../components/Loading";

const GET_MOVIE = gql`
  query getMovies($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      rating
    }
  }
`;
export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(data);
  return <div>{loading && <Loading>Loading..</Loading>}</div>;
};
