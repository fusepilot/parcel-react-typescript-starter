import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { App } from "../App";

test("App Component renders with toggle switch", () => {
  const wrap = render(<App />);

  expect(wrap.getByText("Hello")).toBeInTheDocument();
});
