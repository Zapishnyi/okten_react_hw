export const carsURLs = {
  base: "http://owu.linkpc.net/carsAPI/v2",
  users: "/users",
  auth: "/auth",
  authMe: "/auth/me",
  authRefresh: "/auth/refresh",
  allCars: "/cars",
  oneCar(id: number) {
    return `${this.allCars}/${id}`;
  },
};
