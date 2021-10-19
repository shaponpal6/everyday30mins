import { render } from "@test";

import { HomeTab } from "./index";

describe("HomeTab component testing with testing-library", () => {
  const { getByTestId } = render(<HomeTab />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
