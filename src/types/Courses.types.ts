import Comment from "./Comments.types";

interface CategoryID {
    _id: string;
    createdAt: string;
    name: string;
    title: string;
    updatedAt: string;
   }
  
   interface Creator {
    name: string;
    profile: string;
   }
  
   interface Session {
    _id: string;
    course: string;
    createdAt: string;
    free: number;
    time: string;
    title: string;
    updatedAt: string;
    video: string;
   }

  export default interface Course {
    _id: string;
    cover: string;
    creator: Creator | string;
    description: string;
    discount: number;
    name: string;
    price: number;
    shortName: string;
    categoryID?: CategoryID;
    comments?: Comment;
    isUserRegisteredToThisCourse?: boolean;
    courseStudentsCount?: number;
    createdAt?: string;
    isComplete?: number;
    sessions?: Session[];
    status?: string;
    support?: string;
    updatedAt?: string;
    courseAverageScore?: number;
    registers?: number;
    isSlider?: boolean;
  }
