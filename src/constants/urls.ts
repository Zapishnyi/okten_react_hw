export const urls = {
  base: "https://jsonplaceholder.typicode.com",
  users: "/users",
  posts: "/posts",
  chosenUser: (userId: string) => urls.users + "/" + userId,
  chosenPost: (postId: string) => urls.posts + "/" + postId,
};
