import { render } from "@test";

import data from "@public/meta.json";
import { MyRegularRoutine } from "./index";

describe("MyRegularRoutine component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<MyRegularRoutine />);

    expect(component).toBeTruthy();
  });

  it("MyRegularRoutine length must be equal to the length of the meta data ", () => {
    const { getAllByTestId } = render(<MyRegularRoutine />);

    const cardContainer = getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
