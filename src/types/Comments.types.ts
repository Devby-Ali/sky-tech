interface CommentAnswer {
    body: string;
    creator: Creator;
    createdAt: string;
  }
  
  interface Creator {
    name: string;
    role: "ADMIN" | "USER";
    profile?: string;
  }
  
  export default interface Comment {
    _id?: string;
    body: string;
    score: string;
    creator?: Creator;
    createdAt?: string;
    answerContent?: CommentAnswer;
  }