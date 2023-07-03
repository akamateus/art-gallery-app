import React from "react";
// import useSWR from "swr";
// import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/SpotLight";


export default function HomePage({ pieces }) {


  const spotlightPiece = pieces ? pieces[Math.floor(Math.random() * pieces.length)] : null;

  // const spotlightPiece =
  //   data[Math.floor(Math.random() * (data.length - 1))];





  console.log(pieces);
  return (
    <div>
      <h1>Art Gallery</h1>

      {/* {data ? <ArtPieces pieces={data} /> : <p>Loading...</p>} */}

      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
        />
      )}
   
    </div>
  );
}
