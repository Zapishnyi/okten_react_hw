interface IUrls {
  baseURL: string;
  users: string;
  posts: string;
  comments: string;
  user: (userId: string) => string;
  userPosts: (userId: string) => string;
  commentsToPost: (postId: string) => string;
}

export const urls: IUrls = {
  baseURL: "https://jsonplaceholder.typicode.com",
  users: "/users",
  posts: "/posts",
  comments: "/comments",
  user(userId: string) {
    return `${this.users}/${userId}`;
  },
  userPosts(userId: string) {
    return `${this.posts}?userId=${userId}`;
  },
  commentsToPost(postId: string) {
    return `${this.comments}?postId=${postId}`;
  },
};
