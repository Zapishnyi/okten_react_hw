import ICar from "./ICar";

export default interface ICarPaginated {
  total_items: number;
  total_pages: number;
  prev: string;
  next: string;
  items: ICar[];
}
