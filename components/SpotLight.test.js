import React from "react";
import { render } from "@testing-library/react";
import Spotlight from "../components/Spotlight";

test("renders the wrapper div and artist correctly", () => {
  const artist = "John Doe";

  const { getByText } = render(<Spotlight artist={artist} />);

  // parentNode property is used to retrieve
  // the parent element of the element
  //  containing the artist's name

  const wrapperElement = getByText(artist).parentNode;
  const artistElement = getByText(artist);

  expect(wrapperElement).toBeInTheDocument();
  expect(artistElement).toBeInTheDocument();
});
