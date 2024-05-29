import ICarToSend from "./ICarToSend";

export default interface ICar extends ICarToSend {
  id: number;
  photo: string;
}
