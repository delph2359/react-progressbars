import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import CustomSelect from "..";

describe("Custom Select", () => {
  test("should display options and values correctly", () => {
    const options = [
      { value: 1, text: "#progress1" },
      { value: 2, text: "#progress2" }
    ];
    const { container, getByText } = render(
      <CustomSelect options={options} onChange={() => console.log("changed")} />
    );

    expect(container).toMatchSnapshot();
    const progress1 = getByText("#progress1");
    expect(progress1).toBeInTheDocument();
    expect(progress1.value).toEqual("1");
    const progress2 = getByText("#progress2");
    expect(progress2).toBeInTheDocument();
    expect(progress2.value).toEqual("2");
  });
});
