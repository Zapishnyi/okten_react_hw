const baseUrlFmPlaceholder: string = "https://jsonplaceholder.typicode.com/";

const urlsFmPlaceholder = {
  allUsers: `users`,
  oneUser: (userID: string) => `${urlsFmPlaceholder.allUsers}/${userID}`,
  allPosts: `posts`,
  onePost: (userID: string) => `${urlsFmPlaceholder.onePost}/${userID}`,
  allComments: `comments`,
  commentsToPost: (postId: string) =>
    `${urlsFmPlaceholder.allComments}/${postId}`,
};

export { baseUrlFmPlaceholder, urlsFmPlaceholder };
