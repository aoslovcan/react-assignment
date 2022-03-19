import { render, screen } from "@testing-library/react";
import PostComments from "./PostComments";
import React from "react";

let commentData = {
  name: "This is comment",
  body: "Lorem ipsum dolor sit amet",
  email: "example@gmail.com",
};

describe("PostComments component", () => {
  it("render", () => {
    render(
      <PostComments
        key="1"
        name={commentData.name}
        body={commentData.body}
        email={commentData.email}
      />
    );
    expect(screen.getByTestId("post-comments")).toBeInTheDocument();
  });
  it("show comments", () => {
    render(
      <PostComments
        key="1"
        name={commentData.name}
        body={commentData.body}
        email={commentData.email}
      />
    );
    expect(screen.getByTestId("post-comment-email").textContent).toBe(
      `${commentData.email}`
    );
    expect(screen.getByTestId("post-comment-name").textContent).toBe(
      `${commentData.name}`
    );
    expect(screen.getByTestId("post-comment-body").textContent).toBe(
      `${commentData.body}`
    );
  });
});
