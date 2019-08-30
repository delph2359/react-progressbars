import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import App from "./App";

let mockResponse;

jest.mock("./data/api", () => ({
  getData: () => Promise.resolve(mockResponse)
}));

describe("App functionality", () => {
  it("display correct number of bars and buttons", async () => {
    mockResponse = { buttons: [7, 37, -41, -41], bars: [72, 84], limit: 170 };
    const { getAllByTestId } = render(<App />);
    const [progressBar, buttons] = await waitForElement(() => [
      getAllByTestId("progress-bar"),
      getAllByTestId("button")
    ]);
    expect(progressBar).toHaveLength(2);
    expect(buttons).toHaveLength(4);
  });

  it("button onclick functionality", async () => {
    mockResponse = { buttons: [30, -40], bars: [100], limit: 200 };
    const { getByText, getByTestId } = render(<App />);
    const [increment, decrement, progressBar] = await waitForElement(() => [
      getByText("+30"),
      getByText("-40"),
      getByTestId("progress-bar")
    ]);
    expect(progressBar).toHaveTextContent("50%");
    fireEvent.click(increment);
    expect(progressBar).toHaveTextContent("65%");
    fireEvent.click(decrement);
    expect(progressBar).toHaveTextContent("45%");
  });

  it("control each progress bar by selecting", async () => {
    mockResponse = { buttons: [30], bars: [50, 80], limit: 100 };
    const { getByText, getByTestId } = render(<App />);
    const [
      progressBar1,
      progressBar2,
      customSelect,
      button
    ] = await waitForElement(() => [
      getByText("50%"),
      getByText("80%"),
      getByTestId("custom-select"),
      getByTestId("button")
    ]);
    expect(progressBar1).toHaveTextContent("50%");
    expect(progressBar2).toHaveTextContent("80%");
    fireEvent.click(button);
    expect(progressBar1).toHaveTextContent("80%");
    expect(progressBar2).toHaveTextContent("80%");
    fireEvent.change(customSelect, { target: { value: 2 } });
    fireEvent.click(button);
    expect(progressBar1).toHaveTextContent("80%");
    expect(progressBar2).toHaveTextContent("110%");
  });
});
