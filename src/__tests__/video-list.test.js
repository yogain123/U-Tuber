import React from "react";
import VideoList from "../components/video-list";
import { render } from "@testing-library/react";

let videos = [
  {
    snippet: {
      description: "description",
      title: "title",
      channelTitle: "channelTitle",
      thumbnails: {
        default: {
          url: "#"
        }
      }
    },
    etag: Date.now()
  }
];

test("Checl image src should not be empty", () => {
  const { getByTestId } = render(<VideoList videos={videos}></VideoList>);
  expect(
    getByTestId("video-list")
      .querySelector("img")
      .getAttribute("src")
  ).not.toBe(null);
});
