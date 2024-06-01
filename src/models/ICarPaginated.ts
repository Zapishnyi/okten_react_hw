import ICar from "./ICar";
import IPage from "./IPage";

export default interface ICarPaginated {
  total_items: number;
  total_pages: number;
  prev: IPage | null;
  next: IPage | null;
  items: ICar[];
}
