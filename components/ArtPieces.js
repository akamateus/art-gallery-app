import React, { useState } from "react";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 10rem;
    height: 30rem;
  }
`;

const ArtPieces = ({ pieces }) => {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const toggleFavorite = (slug) => {
    if (artPiecesInfo.includes(slug)) {
      setArtPiecesInfo(artPiecesInfo.filter((favorite) => favorite !== slug));
    } else {
      setArtPiecesInfo([...artPiecesInfo, slug]);
    }
  };

  return (
    <List>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          isFavorite={artPiecesInfo.includes(piece.slug)}
          onToggleFavorite={() => toggleFavorite(piece.slug)}
          artPieces={artPiecesInfo}
        />
      ))}
    </List>
  );
};

export default ArtPieces;
