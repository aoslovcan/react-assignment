import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import React from "react";

let postdata = [
  {
    id: 1,
    title: "Test title",
    body: "This is test body",
    author: "Clara Clarkson",
  },
];

describe("search test", () => {
  it("render", () => {
    render(
      <Search
        placeholder="Find post by user data"
        dataToSearch={postdata}
        setFiltered={jest.fn()}
      />
    );
    expect(screen.getByTestId("search-component")).toBeInTheDocument();
  });

  it("change input", () => {
    render(
      <Search
        placeholder="Find post by user data"
        dataToSearch={postdata}
        setFiltered={jest.fn()}
      />
    );
    let searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    const mockChanges = { target: { value: "Test" } };
    fireEvent.change(searchInput, mockChanges);
    expect(searchInput.placeholder).toBe("Find post by user data");
    expect(searchInput.value).toBe("Test");
  });

  it("input value is empty", () => {
    render(
      <Search
        placeholder="Find post by user data"
        dataToSearch={postdata}
        setFiltered={jest.fn()}
      />
    );
    let searchInput = screen.getByTestId("search-input");
    const mockChanges = { target: { value: " " } };
    fireEvent.change(searchInput, mockChanges);
    expect(searchInput.value).toBe(" ");
  });
});
