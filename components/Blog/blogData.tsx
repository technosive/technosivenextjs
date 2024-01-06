import { Blog } from "@/types/blog";

//Blog Images
import blogImg1 from "../../public/images/blog/blog-01.jpg";
import blogImg2 from "../../public/images/blog/blog-02.jpg";
import blogImg3 from "../../public/images/blog/blog-03.jpg";

// Author Images
import blogAuthorImg1 from "../../public/images/blog/author-01.png";
import blogAuthorImg2 from "../../public/images/blog/author-02.png";
import blogAuthorImg3 from "../../public/images/blog/author-03.png";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blogImg1,
    author: {
      name: "Samuyl Joshi",
      image: blogAuthorImg1,
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blogImg2,
    author: {
      name: "Musharof Chy",
      image: blogAuthorImg2,
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blogImg3,
    author: {
      name: "Lethium Deo",
      image: blogAuthorImg3,
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
