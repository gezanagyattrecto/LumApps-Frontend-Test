import request, { Methods } from "../util/request";

class HeroService {
  async getCharacters() {
    return request<any>({
      method: Methods.GET,
      resource: "characters",
    });
  }
}

export const heroService = new HeroService();
