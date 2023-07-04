import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

const ExampleData = [
    {
    slug: "abstract-painting",
    artist: "Samantha Anderson",
    name: "Abstract Painting",
    imageSource:
    "https://example-apis.vercel.app/assets/art/abstract-painting.jpg",
    year: "2012",
    genre: "Abstract Art",
    colors: ["#F16D6D", "#FFC09F", "#FFF8D6", "#98DDCA", "#72C0F4"],
    dimensions: {
    height: 2400,
    width: 1800,
    type: "jpg",
    },
    },
    {
    slug: "landscape-photography",
    artist: "Jonathan Roberts",
    name: "Landscape Photography",
  
    },
    {
    slug: "pop-art-sculpture",
    artist: "Lucas Hernandez",
    name: "Pop Art Sculpture",
   
    },
    {
    slug: "impressionist-painting",
    artist: "Olivia Thompson",
    name: "Impressionist Painting",

    },
    ];
    
    
    
test("renders a list of art pieces", () => {
  render(<ArtPieces pieces={ExampleData} />);
  const artPieces = screen.getAllByRole("list");
  expect(artPieces).toHaveLength(1);
});