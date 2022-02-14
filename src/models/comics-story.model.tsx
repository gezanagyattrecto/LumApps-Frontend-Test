export interface ComicsStoryModel {
  id: number;
  title: string;
  characters: { items: ComicCharacters[] };
}

export interface ComicCharacters {
  name: string;
}
