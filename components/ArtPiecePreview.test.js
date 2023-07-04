import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("displays image, title, artist", () => {
  render(
    <ArtPiecePreview artist="Min An" title="Silhouette Photo of Trees" />
  );

  const artist = screen.getByText("Min An");
  const title = screen.getByRole("heading", { level: 3, name: "Silhouette Photo of Trees" });

  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});
