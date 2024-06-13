import IUser from "../../models/IUser";
import IPost from "../../models/IPost";

interface ISliceBundle {
  users: IUser[];
  posts: IPost[];
  chosenUser: IUser | null;
  chosenPost: IPost | null;
}

const ititialState: ISliceBundle = {
  users: [],
  posts: [],
  chosenUser: null,
  chosenPost: null,
};
