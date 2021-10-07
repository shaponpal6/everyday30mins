import React, { ReactElement, FC } from "react";
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";
import { Provider } from "react-redux";
import store from "@redux/store";

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */
 interface Props {}

export const AllTheProviders: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={store} {...props}>{children}</Provider>
      </MockedProvider>
    </>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
