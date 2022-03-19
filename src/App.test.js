import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

test("renders learn react link", () => {
  let app = render(<App />);
  expect(app).toBeTruthy();
});
