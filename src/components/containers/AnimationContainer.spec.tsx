import { render } from "@test";

import { AnimationContainer } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<AnimationContainer />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
