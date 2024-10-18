export type postType = {
  _id: string;
  prompt: string;
  tag: string;
  creator: {
    _id: string;
    image: string;
    username: string;
    email: string;
  };
};

export type feedData = {
  posts: postType[];
};
