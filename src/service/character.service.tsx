import request, { Methods } from "../util/request";
import { ListResponseModel, MarvelCharacterModel } from "../models";
import { ComicsDetailModel } from "../models/comics-detail.model";
import config from "config/index";

class CharacterService {
  async search(keyword: string, page: number = 0) {
    return request<ListResponseModel<MarvelCharacterModel>>({
      method: Methods.GET,
      resource: "characters",
      params: {
        nameStartsWith: keyword,
        limit: config.ITEMS_PER_PAGE,
        offset: config.ITEMS_PER_PAGE * page,
      },
    });
  }

  async get(id: string) {
    const response = await request<ListResponseModel<MarvelCharacterModel>>({
      method: Methods.GET,
      resource: `characters/${id}`,
    });

    return response?.results[0] || null;
  }

  async getComics(characterId: string) {
    return await request<ListResponseModel<ComicsDetailModel>>({
      method: Methods.GET,
      resource: `characters/${characterId}/comics`,
      params: {
        orderBy: "-onsaleDate",
        limit: 4,
      },
    });
  }
}

export const characterService = new CharacterService();
