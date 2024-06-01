import { AxiosResponse } from "axios";
import ICar from "./ICar";

export default interface ICarFormData {
  car: ICar;
  title: string;
  manipulateCar: (id: number) => Promise<AxiosResponse<ICar>>;
}
