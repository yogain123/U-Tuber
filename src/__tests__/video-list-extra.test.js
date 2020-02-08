import React from "react";
import VideoListExtra from "../components/video-list-extra";
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
  const { getByTestId } = render(
    <VideoListExtra videos={videos}></VideoListExtra>
  );
  expect(
    getByTestId("video-list-extra")
      .querySelector("img")
      .getAttribute("src")
  ).not.toBe(null);
});
