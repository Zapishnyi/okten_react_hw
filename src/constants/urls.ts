export const urls = {
  base: "http://185.69.152.209/carsAPI/v2",
  users: "/users",
  auth: "/auth",
  authMe: "/auth/me",
  authRefresh: "/auth/refresh",
  cars: "/cars",
  carDelete: (id: number) => `${urls.cars}/${id.toString()}`,
  car(id: number): string {
    return `${this.cars}/${id}`;
  },
};
