export const carsURLs = {
  base: "http://185.69.152.209/carsAPI/v2",
  users: "/users",
  auth: "/auth",
  authMe: "/auth/me",
  authRefresh: "/auth/refresh",
  allCars: "/cars",
  oneCar(id: number) {
    return `${this.allCars}/${id}`;
  },
};
