import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  test("renders avatar image with correct src", () => {
    const src = "test-image.jpg";
    render(<Avatar src={src} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", src);
  });
});
