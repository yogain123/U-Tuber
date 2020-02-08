import React from "react";
import VideoDisplay from "../components/video-display";
import { render } from "@testing-library/react";

let video = {
  snippet: {
    description: "description",
    title: "title"
  },
  id: Date.now()
};

test("Check Video Title should not be null", () => {
  const { getByTestId } = render(<VideoDisplay video={video}></VideoDisplay>);
  expect(
    getByTestId("video-display").querySelectorAll(".card-text")[0].innerHTML
  ).not.toBe("");
});

test("Check Video description should not be null", () => {
  const { getByTestId } = render(<VideoDisplay video={video}></VideoDisplay>);
  expect(
    getByTestId("video-display").querySelectorAll(".card-text")[1].innerHTML
  ).not.toBe("");
});

test("Check atleast one IFrame Present", () => {
  const { getByTestId } = render(<VideoDisplay video={video}></VideoDisplay>);
  expect(
    getByTestId("video-display").getElementsByTagName("iframe").length
  ).not.toBe(0);
});
