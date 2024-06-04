import IUser from "./IUser";
import IPost from "./IPost";
import IComment from "./IComment";
import { Dispatch, SetStateAction } from "react";

export default interface IContextBundle {
  allUsers: IUser[];
  allPosts: IPost[];
  allComments: IComment[];
  chosenUser: IUser | null;
  chosenPost: IPost | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setPost: Dispatch<SetStateAction<IPost | null>>;
}
