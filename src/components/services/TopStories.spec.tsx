import { render } from "@test";

import { TopStories } from "./index";

describe("TopStories component testing with testing-library", () => {
  const { getByTestId } = render(<TopStories />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
