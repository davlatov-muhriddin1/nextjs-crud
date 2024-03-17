export interface Anime {
  _id: string;
  image: string;
  title: string;
  info: string;
  createdAt: string;
  deleteAnime?: (id: string) => Promise<void>;
}
