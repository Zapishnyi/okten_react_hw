import { ICarProps } from "./ICarProps";

export interface IPaginInfo {
  total_items: number;
  total_pages: number;
  prev: string;
  next: string;
  items: ICarProps[];
}
