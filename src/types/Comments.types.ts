import Creator from "./Creator.types";

interface AnswerContent {
  _id: string;
  answer: 0 | 1;
  body: string;
  course: string;
  createdAt: string;
  creator: Creator;
  isAnswer: 0 | 1;
  mainCommendID: string;
  score: number;
  updatedAt: string;
}

export default interface Comment {
  _id: string;
  answer: 0 | 1;
  answerContent: AnswerContent;
  body: string;
  createdAt: string;
  creator: Creator;
  isAnswer: 0 | 1;
  score: number;
  updatedAt: string;
}