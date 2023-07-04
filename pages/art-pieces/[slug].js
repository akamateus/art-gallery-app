import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  // Find the art piece with the matching slug

  const pieceIndex = pieces.findIndex((piece) => piece.slug === slug);
  const piece = pieces[pieceIndex];

  if (!piece) {
    return <div>Loading 🔃</div>;
  }

  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.title}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}

export default ArtPieceDetailsPage;
