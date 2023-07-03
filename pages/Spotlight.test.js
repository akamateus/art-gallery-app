import React from "react";
import { render } from "@testing-library/react";
import Spotlight from "../components/SpotLight";
describe("Spotlight Component", () => {
  it("renders the image and artist correctly", () => {
    const imageSource = "path/to/image.jpg";
    const artist = "John Doe";

    const { getByAltText, getByText } = render(
      <Spotlight image={imageSource} artist={artist} />
    );

    const imageElement = getByAltText("Spotlight Image");
    const artistElement = getByText(artist);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(imageSource);
    expect(artistElement).toBeInTheDocument();
  });
});
