import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Button from "../";

describe("Button", () => {
  test("should display text correctly", () => {
    const { container, getByText } = render(
      <Button text={50} onClick={() => console.log("clicked")} />
    );

    expect(container).toMatchSnapshot();
    expect(getByText("50")).toBeInTheDocument();
  });
});
