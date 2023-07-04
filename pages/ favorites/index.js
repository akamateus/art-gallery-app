import ArtPieces from "../components/ArtPieces";
import { Link } from "next/link";

const FavoritesPage = ({ favoriteArtPieces }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <Link href="/">Go back to Home</Link>

      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
};

export default FavoritesPage;
