import { render } from "@test";

import { GoodDay } from "./index";

describe("GoodDay component testing with testing-library", () => {
  const { getByTestId } = render(<GoodDay />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
