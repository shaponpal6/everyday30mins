import { render } from "@test";

import { CurrentTasks } from "./index";

describe("CurrentTasks component testing with testing-library", () => {
  const { getByTestId } = render(<CurrentTasks />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
