import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavouriteButton";
const Container = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const ArtPiecePreview = ({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image priority src={image} alt={title} width={200} height={200} />
        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </ButtonContainer>
      </ImageContainer>
      <h3>{title}</h3>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>More info 🎨</Link>
    </Container>
  );
};

export default ArtPiecePreview;
