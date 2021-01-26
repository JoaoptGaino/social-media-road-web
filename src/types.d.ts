export interface Posts{
  id:number;
  post:string;
  username:string;
  likes:number;
}

export interface PostsProps{
  post:Posts;
}