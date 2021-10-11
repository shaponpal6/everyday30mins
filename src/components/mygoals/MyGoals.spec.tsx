import { render } from "@test";

import data from "@public/meta.json";
import { MyGoals } from "./index";

describe("MyGoals component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<MyGoals />);

    expect(component).toBeTruthy();
  });

  it("MyGoals length must be equal to the length of the meta data ", () => {
    const { getAllByTestId } = render(<MyGoals />);

    const cardContainer = getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
