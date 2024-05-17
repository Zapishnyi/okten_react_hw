const baseUrlFmPlaceholder: string = "https://jsonplaceholder.typicode.com/";

const urlsFmPlaceholder = {
  allUsers: `users`,
  oneUser: (userID: string) => `${urlsFmPlaceholder.allUsers}/${userID}`,
  allPosts: `posts`,
  postsOfUser: (userID: string) =>
    `${urlsFmPlaceholder.allPosts}/?userId=${userID}`,
  allComments: `comments`,
  commentsToPost: (postId: string) =>
    `${urlsFmPlaceholder.allComments}?postId=${postId}`,
};

export { baseUrlFmPlaceholder, urlsFmPlaceholder };
