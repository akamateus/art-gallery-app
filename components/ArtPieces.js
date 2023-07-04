import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ pieces }) => {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </ul>
  );
};

export default ArtPieces;