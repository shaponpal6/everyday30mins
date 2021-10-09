import { render } from "@test";

import { BoxContainer } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<BoxContainer />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
