import { render } from "@test";

import { Navbar } from "./index";

describe("Navbar component testing with testing-library", () => {
  const { getByTestId } = render(<Navbar />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
