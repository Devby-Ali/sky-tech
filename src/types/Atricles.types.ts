import Category from "./Category.types";
import Creator from "./Creator.types";

export default interface Article {
  _id: string;
  body: string;
  categoryID: Category
  cover: string;
  createdAt: string;
  creator: Creator
  description: string;
  publish: number
  shortName: string;
  title: string;
  updatedAt: string;
}

