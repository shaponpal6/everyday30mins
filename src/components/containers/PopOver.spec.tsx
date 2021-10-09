import { render } from "@test";

import { PopOver } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<PopOver />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
