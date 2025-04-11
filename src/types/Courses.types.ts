import Comment from "./Comments.types";
import Creator from "./Creator.types";
import Category from "./Category.types";

export interface Session {
  _id: string;
  course: string;
  createdAt: string;
  free: 0 | 1;
  time: string;
  title: string;
  updatedAt: string;
  video?: string;
}

export default interface Course {
  _id: string;
  categoryID: Category;
  comments: Comment[];
  courseStudentsCount: number;
  cover: string;
  createdAt: string;
  creator: Creator;
  description: string;
  discount: number;
  isComplete: number;
  isUserRegisteredToThisCourse: boolean;
  name: string;
  price: number;
  sessions: Session[];
  shortName: string;
  status: string;
  support: string;
  updatedAt: string;
}

export interface CourseBoxProp {
  _id: string;
  registers: number;
  cover: string;
  creator: Creator;
  description: string;
  discount: number;
  name: string;
  price: number;
  shortName: string;
  courseAverageScore: number;
  isComplete: number;
  isSlider?: boolean;
}
