import { render } from "@test";

import { ParticlesAnimation } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<ParticlesAnimation />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
