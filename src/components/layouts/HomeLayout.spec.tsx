import { render } from "@test";

import { HomeLayout } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<HomeLayout />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
