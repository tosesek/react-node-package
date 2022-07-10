import React from "react";
import { render } from "../../setupTests";

import { Button } from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button title="Hello world!" />);
  });
});
