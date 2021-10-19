import { render } from "@test";

import { TasksMeasurementTable } from "./index";

describe("TasksMeasurementTable component testing with testing-library", () => {
  const { getByTestId } = render(<TasksMeasurementTable />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
