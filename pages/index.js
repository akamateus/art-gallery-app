import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";
const fetchArtPieces = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};
export default function HomePage() {
  const { data } = useSWR(URL, fetchArtPieces);

  console.log(data);
  return (
    <div>
      <h1>Art Gallery</h1>
      {data ? <ArtPieces pieces={data} /> : <p>Loading...</p>}
    </div>
  );
}
