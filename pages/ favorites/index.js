import ArtPieces from "../components/ArtPieces";
import { Link } from "next/link";

const FavoritesPage = () => {
  const { artPieces } = useArtPiecesInfo();

  // Filter the art pieces to display only the favorites
  const favoriteArtPieces = Object.values(artPieces).filter(
    (artPiece) => artPiece.isFavorite
  );

  return (
    <div>
      <h1>Favorites</h1>
      <Link href="/">Go back to Home</Link>
      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
};

export default FavoritesPage;
