import { render } from "@test";

import data from "@public/meta.json";
import { ServicesList } from "./index";

describe("ServicesList component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<ServicesList />);

    expect(component).toBeTruthy();
  });

  it("ServicesList length must be equal to the length of the meta data ", () => {
    const { getAllByTestId } = render(<ServicesList />);

    const cardContainer = getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
