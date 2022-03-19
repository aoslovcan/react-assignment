export function getPostDetails(id) {
  const apiMockPostDetails = [
    {
      body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1,
    },
  ];
  return Promise.resolve(apiMockPostDetails);
}

export function getPostComments(id) {
  const apiMockPostDetails = [
    {
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos↵tempora quo necessitatibus↵dolor quam autem quasi↵reiciendis et nam sapiente accusantium",
      email: "Eliseo@gardner.biz",
      id: 1,
      name: "id labore ex et quam laborum",
      postId: 1,
    },
  ];

  return Promise.resolve(apiMockPostDetails);
}
