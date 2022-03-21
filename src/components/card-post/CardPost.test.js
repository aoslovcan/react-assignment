import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardPost from "./CardPost";
import React from "react";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => {
    return <svg />;
  },
}));
let postData = {
  id: 1,
  title: "Test title",
  content: "This is test body",
  authorData: "Clara Clarkson",
};

describe("CardPost", () => {
  it("render", () => {
    render(
      <Router>
        <CardPost
          authorData={postData.authorData}
          message="Hello from"
          title={postData.title}
          imgUrl={"https://picsum.photos/200/300"}
          content={postData.content}
        />
      </Router>
    );
    expect(screen.getByTestId("card-post")).toBeInTheDocument();
  });

  it("set local storage", () => {
    render(
      <Router>
        <CardPost
          authorData={postData.authorData}
          message="Hello from"
          title={postData.title}
          imgUrl={"https://picsum.photos/200/300"}
          content={postData.content}
        />
      </Router>
    );

    let link = screen.getByTestId("post-link");
    const KEY = "authorName",
      VALUE = `${postData.authorData}`;
    localStorage.setItem(KEY, VALUE);
    fireEvent.click(link, localStorage.setItem(KEY, VALUE));
    expect(link).toBeInTheDocument();
  });
});
