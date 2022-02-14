export interface MarvelCharacterModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface StoryItem extends ComicsItem {
  type: "cover" | "interiorStory";
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}
