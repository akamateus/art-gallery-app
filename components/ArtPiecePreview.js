import Image from "next/image";
import Link from "next/link";

const ArtPiecePreview = ({ image, title, artist, slug }) => {
  return (
    <div>
      <Image priority src={image} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>More info 🎨</Link>
    </div>
  );
};

export default ArtPiecePreview;
