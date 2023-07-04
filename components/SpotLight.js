import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

const ButtonContainer = styled.div`
  z-index: 9;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export default function Spotlight({
  image,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </ButtonContainer>
        <StyledImage
          priority
          src={image}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${artist}`}
        />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
