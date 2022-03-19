import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PostPage from "./PostPage";
import * as API from "../../api/allApis";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
  useRouteMatch: () => ({ url: "/posts/1" }),
}));

let postdata = [
  {
    id: 1,
    title: "Test title",
    body: "This is test body",
    author: "Clara Clarkson",
  },
];

describe("post page test", () => {
  it("render", async () => {
    let container;
    let postMock;
    let commentsMock;
    await waitFor(() => {
      postMock = jest.spyOn(API, "getPostDetails").mockImplementation(() => {
        return Promise.resolve([
          {
            body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId: 1,
          },
        ]);
      });
      commentsMock = jest
        .spyOn(API, "getPostComments")
        .mockImplementation(() => {
          return Promise.resolve([
            {
              body: "laudantium enim quasi est quidem magnam voluptate ipsam eos↵tempora quo necessitatibus↵dolor quam autem quasi↵reiciendis et nam sapiente accusantium",
              email: "Eliseo@gardner.biz",
              id: 1,
              name: "id labore ex et quam laborum",
              postId: 1,
            },
          ]);
        });

      container = render(<PostPage message="Hello from" />);
    });
    expect(screen.getByTestId("post-page")).toBeInTheDocument();
    expect(postMock).toHaveBeenCalled();
    expect(commentsMock).toHaveBeenCalled();
  });
});
