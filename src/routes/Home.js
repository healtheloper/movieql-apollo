import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const MoviesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 400px;
`;
const GenresTitle = styled.span`
  position: absolute;
  top: 1vw;
  left: 0.1vw;
  font-size: 18px;
  font-weight: bold;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 345px);
  gap: 20px;
`;
const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      medium_cover_image
      genres
    }
  }
`;
const GET_MOVIES_BY_GENRE = gql`
  query movies_genre($genre: String!) {
    movies_genre(limit: 7, genre: $genre) {
      id
      title
      genres
      year
      medium_cover_image
      summary
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  const { loading: horrorLoading, data: horrorData } = useQuery(
    GET_MOVIES_BY_GENRE,
    {
      variables: { genre: "horror" },
    }
  );
  const { loading: dramaLoading, data: dramaData } = useQuery(
    GET_MOVIES_BY_GENRE,
    {
      variables: { genre: "drama" },
    }
  );
  const { loading: actionLoading, data: actionData } = useQuery(
    GET_MOVIES_BY_GENRE,
    {
      variables: { genre: "action" },
    }
  );
  return (
    <>
      {loading ? <Loading>Loading...</Loading> : ""}
      <MoviesBox>
        {horrorLoading ? (
          ""
        ) : (
          <GenresTitle>무더운 여름 공포로 채우기</GenresTitle>
        )}
        <List>
          {horrorData?.movies_genre.map((m) => (
            <Movie key={m.id} id={m.id} {...m}></Movie>
          ))}
        </List>
      </MoviesBox>
      <MoviesBox>
        {dramaLoading ? (
          ""
        ) : (
          <GenresTitle>드라마로 감성 충만해보기 어때요?</GenresTitle>
        )}
        <List>
          {dramaData?.movies_genre.map((m) => (
            <Movie key={m.id} id={m.id} {...m}></Movie>
          ))}
        </List>
      </MoviesBox>
      <MoviesBox>
        {actionLoading ? (
          ""
        ) : (
          <GenresTitle>짧고 가볍게, 스낵 콘텐츠!</GenresTitle>
        )}
        <List>
          {actionData?.movies_genre.map((m) => (
            <Movie key={m.id} id={m.id} {...m}></Movie>
          ))}
        </List>
      </MoviesBox>
    </>
  );
};
export default Home;
