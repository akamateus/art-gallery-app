import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
  const router = useRouter();

  return (
    <div>
      <Link href="/art-pieces">👈🏽 Back</Link>
      <Image priority src={image} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default ArtPieceDetails;
