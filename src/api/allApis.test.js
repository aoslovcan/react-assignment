import React from "react";
import { getPosts, getUsers, getPostDetails, getPostComments } from "./allApis";
import * as api from "../utils/apiClient";
//import {get} from '../utils/apiClient';

describe("All apis", () => {
  const apiMockReturn = { mockData: "test" };
  const data = { mockData: "data" };

  it("getPosts", () => {
    let mockGetPosts = jest.spyOn(api, "get").mockImplementationOnce(() => {
      return Promise.resolve(apiMockReturn);
    });
    getPosts();
    expect(mockGetPosts).toHaveBeenCalled();
  });

  it("getUsers", () => {
    let mockGetUsers = jest.spyOn(api, "get").mockImplementationOnce(() => {
      return Promise.resolve(apiMockReturn);
    });
    getUsers();
    expect(mockGetUsers).toHaveBeenCalled();
  });

  it("getPostDetails", () => {
    let mockGetPostDetails = jest
      .spyOn(api, "get")
      .mockImplementationOnce(() => {
        return Promise.resolve(apiMockReturn);
      });
    getPostDetails(1);
    expect(mockGetPostDetails).toHaveBeenCalled();
  });

  it("getPostComments", () => {
    let mockGetPostComments = jest
      .spyOn(api, "get")
      .mockImplementationOnce(() => {
        return Promise.resolve(apiMockReturn);
      });
    getPostComments(1);
    expect(mockGetPostComments).toHaveBeenCalled();
  });
});
