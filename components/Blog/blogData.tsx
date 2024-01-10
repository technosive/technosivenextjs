import { Blog } from "@/types/blog";

//Blog Images
import blogImg2 from "../../public/images/blog/blog-02.jpg";
import blogImg3 from "../../public/images/blog/blog-03.jpg";
import blogImg1 from "../../public/images/blog/revolutionizing-healthcare/160.jpg";

// Author Images
import blogAuthorImg2 from "../../public/images/blog/author-02.png";
import blogAuthorImg3 from "../../public/images/blog/author-03.png";
import blogAuthorImg1 from "../../public/images/blog/revolutionizing-healthcare/author.jpg";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Revolutionizing Healthcare: The Imperative of Smart Hospitals",
    path: "/blogs/revolutionizing-healthcare",
    paragraph:
      "In the dynamic realm of healthcare, the need for smart hospitals is unequivocal. At Technosive...",
    image: blogImg1,
    author: {
      name: "Samual Joshi",
      image: blogAuthorImg1,
      designation: "Software Developer",
    },
    tags: ["Healthcare"],
    publishDate: "10/01/2024",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    path: "/blogs/improve-design-skills",
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
    path: "/blogs/tips-to-improve-codings-speed",
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
