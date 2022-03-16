import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Replace later");
  expect(linkElement).toBeInTheDocument();
});
