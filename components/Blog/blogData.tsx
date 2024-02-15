import { Blog } from "@/types/blog";

//Blog Images
import blogImg3 from "../../public/images/blog/blog-03.webp";
import blogImg1 from "../../public/images/blog/revolutionizing-healthcare/160.webp";
import blogImg2 from "../../public/images/blog/smart-building-monitoring/160.webp";

// Author Images
import blogAuthorImg2 from "../../public/images/blog/author-02.webp";
import blogAuthorImg3 from "../../public/images/blog/author-03.webp";
import blogAuthorImg1 from "../../public/images/blog/revolutionizing-healthcare/author.webp";

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
    title: "Smart Building Monitoring",
    path: "/blogs/smart-building-monitoring",
    paragraph:
      "In the realm of technological progress, smart buildings stand out as beacons of innovation, promising enhanced efficiency and sustainability. At the core of this revolution...",
    image: blogImg2,
    author: {
      name: "Musharof Chy",
      image: blogAuthorImg2,
      designation: "Content Writer",
    },
    tags: ["IOT"],
    publishDate: "15/02/2024",
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
