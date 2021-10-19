import { render } from "@test";

import { Quote } from "./index";

describe("Quote component testing with testing-library", () => {
  const { getByTestId } = render(<Quote />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
