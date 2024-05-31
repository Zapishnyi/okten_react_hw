export default interface ILocation<T> {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: T;
}
