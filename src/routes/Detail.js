import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../components/Loading";
import styled from "styled-components";

const GET_MOVIE = gql`
  query movie($id: Int!) {
    movie(id: $id) {
      id
      title
      large_cover_image
      background_image
      description_full
      rating
      yt_trailer_code
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const Background = styled.div`
  background: url(${(props) => props.bg}) 100% no-repeat;
  background-size: cover;
  background-postion: center;
  width: 100%;
  height: 400px;
  filter: blur(3px);
`;
const Script = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
`;
const Information = styled.div`
  margin: 10px;
`;
const Description = styled.span`
  margin: 10px;
  width: 600px;
`;
const Image = styled.img`
  position: absolute;
  width: 500px;
  top: 10px;
  right: 5%;
`;
const Video = styled.iframe`
  margin: 10px;
  position: absolute;
  width:100%
  left: 0;
  top: 80%;
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <>
      {loading ? (
        <Loading>Loading..</Loading>
      ) : (
        <Container>
          <Background bg={data?.movie.background_image}></Background>
          <Script>
            <Title>{data?.movie.title}</Title>
            <Information>Rating {data?.movie.rating}</Information>
            <Description>{data?.movie.description_full}</Description>
          </Script>
          {/* <Image alt="poster" src={`${data?.movie.large_cover_image}`} /> */}
          <Video
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${data?.movie.yt_trailer_code}?autoplay=1`}
          ></Video>
        </Container>
      )}
    </>
  );
};
export default Detail;
