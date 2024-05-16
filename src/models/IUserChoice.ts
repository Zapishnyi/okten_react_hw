import { Dispatch, SetStateAction } from "react";
import { IUserProps } from "./IUserProps";
import { IPostProps } from "./IPostProps";

export interface IUserChoice {
  chosenUser: IUserProps | null;
  chosenPost: IPostProps | null;
  setChosenUser: Dispatch<SetStateAction<IUserProps | null>>;
  setChosenPost: Dispatch<SetStateAction<IPostProps | null>>;
}
