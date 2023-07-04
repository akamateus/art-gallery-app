import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.isFavorite ? "yellow" : "white")};
  position: relative;
  border: 2px solid black;
  border-radius: 10%;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0.3rem 0 0;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "not-Favourite" : "favourite"}
    >
      <Image src="/assets/heart.svg" width={30} height={30} alt="" />
    </Button>
  );
}
