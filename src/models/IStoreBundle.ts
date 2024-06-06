import IUser from "./IUser";
import IPost from "./IPost";
import IComment from "./IComment";

export default interface IStoreBundle {
  allUsers: IUser[];
  setAllUsers: (allUsers: IUser[]) => void;
  allPosts: IPost[];
  setAllPosts: (allPosts: IPost[]) => void;
  allComments: IComment[];
  setAllComments: (allComments: IComment[]) => void;
  chosenUser: IUser | null;
  setChosenUser: (chosenUser: IUser | null) => void;
  chosenPost: IPost | null;
  setChosenPost: (chosenPost: IPost | null) => void;
}
