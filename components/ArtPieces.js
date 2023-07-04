import React, { useState } from "react";
import ArtPiecePreview from "./ArtPiecePreview";
import styled
 from "styled-components";
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
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (slug) => {
    if (favorites.includes(slug)) {
      setFavorites(favorites.filter((favorite) => favorite !== slug));
    } else {
      setFavorites([...favorites, slug]);
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
          isFavorite={favorites.includes(piece.slug)}
          onToggleFavorite={() => toggleFavorite(piece.slug)}
        />
      ))}
     </List>
  );
};

export default ArtPieces;
