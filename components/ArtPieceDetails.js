import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavouriteButton";
import CommentForm from "./CommentsForm";
import Comments from "./Comments";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtPieceDetails = ({ image, title, artist, year, genre, comments, addComment }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/art-pieces">👈🏽 Back</Link>
      <Image priority src={image} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <List>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </List>
      {comments && <Comments comments={comments} />}
      <CommentForm addComment={addComment} />
    </Wrapper>
  );
};

export default ArtPieceDetails;
