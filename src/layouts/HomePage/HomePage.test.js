import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import * as API from "../../api/allApis";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "/",
  }),
  useRouteMatch: () => ({ url: "/" }),
}));

describe("HomePage", () => {
  it("render", async () => {
    let container;
    let postMock;
    let usersMock;
    await waitFor(() => {
      postMock = jest.spyOn(API, "getPosts").mockImplementation(() => {
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
      usersMock = jest.spyOn(API, "getUsers").mockImplementation(() => {
        return Promise.resolve([
          {
            email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org",
          },
        ]);
      });

      container = render(
        <Router>
          <HomePage message="Hello from" />
        </Router>
      );
    });
    expect(container.getByTestId("home-page")).toBeInTheDocument();
  });
});
