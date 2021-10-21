import { render } from "@test";

import { GoodMorningModel } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<GoodMorningModel />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
