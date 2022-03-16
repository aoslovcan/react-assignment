import { get } from "../utils/apiClient";

export function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return get(url);
}

export function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return get(url);
}

export function getPostDetails(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  return get(url);
}

export function getPostComments(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  return get(url);
}
