interface Creator {
  _id: string;
  name: string;
  username?: string;
  role: "ADMIN" | "USER";
}

interface CatrgoryArticle {
  _id: string;
  name: string;
  title: string;
}

export default interface Article {
  _id: string;
  title: string;
  body: string;
  cover: string | File;
  createdAt: string;
  creator: Creator;
  description: string;
  publish: number;
  shortName: string;
  categoryID?: CatrgoryArticle;
}

export type { CatrgoryArticle, Creator }
