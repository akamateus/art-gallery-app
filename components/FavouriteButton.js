import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`

  background-color: ${(props) => (props.isFavorite ? "yellow" : "white")};

  border: 2px solid black;
  border-radius: 10%;
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  padding: 0.3rem 0 0;
`;

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite

}) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "isFavorite" : "Favorite"}

    >
      <Image src="/assets/heart.svg" width={25} height={25} alt="" />
    </Button>
  );
}
