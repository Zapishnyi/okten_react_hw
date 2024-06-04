import IPost from "./IPost";
import IComment from "./IComment";

export default interface IPostWithComments extends IPost {
  comments?: IComment[];
}
