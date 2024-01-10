type Author = {
  name: string;
  image: any;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  path: string;
  paragraph: string;
  image: any;
  author: Author;
  tags: string[];
  publishDate: string;
};
