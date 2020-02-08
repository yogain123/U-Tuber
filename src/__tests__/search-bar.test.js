import React from "react";
import SearchBar from "../components/search_bar";
import { render } from "@testing-library/react";

let placeholder;
beforeEach(() => {
  placeholder = "Search Video";
});

test("Check if search bar has correct placeholder", () => {
  const { getByTestId } = render(<SearchBar></SearchBar>);
  expect(
    getByTestId("form-group")
      .querySelector("input")
      .getAttribute("placeholder")
  ).toBe(placeholder);
});
