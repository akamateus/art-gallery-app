import styled from "styled-components";
import Image from "next/image";


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

export default function Spotlight({
  image,
  artist,

}) {
  return (
    <Wrapper>
      <ImageContainer>
     
      <StyledImage
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