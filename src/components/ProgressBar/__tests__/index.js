import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "../";

describe("Progress bar", () => {
  test("should render basic Progress bar (no props)", () => {
    const { container, getByText } = render(<ProgressBar />);
    expect(container).toMatchSnapshot();
    expect(getByText("0%")).toBeInTheDocument();
  });

  test("should render basic Progress bar with correct percentage", () => {
    const { container, getByText } = render(<ProgressBar value={40} />);
    expect(container).toMatchSnapshot();
    expect(getByText("40%")).toBeInTheDocument();
  });

  test("should not go below zero", () => {
    const { container, getByText } = render(<ProgressBar value={-170} />);
    expect(container).toMatchSnapshot();
    expect(getByText("0%")).toBeInTheDocument();
  });

  test("should render exceeded limit with red background", () => {
    const { container, getByText } = render(
      <ProgressBar value={170} limit={100} />
    );
    expect(container).toMatchSnapshot();
    expect(getByText("170%")).toBeInTheDocument();
  });
});
