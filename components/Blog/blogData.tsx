import { Blog } from "@/types/blog";

//Blog Images
import blogImg3 from "../../public/images/blog/RAG/RAG.webp";
import blogImg1 from "../../public/images/blog/revolutionizing-healthcare/160.webp";
import blogImg2 from "../../public/images/blog/blog-03.webp";
import blogImg4 from "../../public/images/blog/post-01.webp";

// Author Images
import blogAuthorImg2 from "../../public/images/blog/author-02.webp";
import blogAuthorImg3 from "../../public/images/blog/author-03.webp";
import blogAuthorImg1 from "../../public/images/testimonials/auth-01.png";
import blogAuthorImg4 from "../../public/images/testimonials/auth-03.png";

const blogData: Blog[] = [
  {
    title: "Enhancing Business Efficiency with Retrieval-Augmented Generation",
    path: "/blogs/retrieval-augmented-generation",
    paragraph:
      "In the realm of artificial intelligence, one innovative technology making waves in the business world is Retrieval-Augmented Generation (RAG). This cutting-edge approach bridges the gap between general question-answering",
    image: blogImg3,
    author: {
      name: "Alex Smith",
      image: blogAuthorImg3,
      designation: "Content Writer",
    },
    tags: ["IOT"],
    publishDate: "13/05/2024",
  },
  {
    title: "Advanced Threat Detection: Protecting Your Network in the Digital Age",
    path: "/blogs/advanced-threat-detection",
    paragraph:
      "In today's evolving threat landscape, organizations need sophisticated threat detection capabilities to identify and neutralize cyber attacks before they cause damage.",
    image: blogImg2,
    author: {
      name: "Musharof Chy",
      image: blogAuthorImg2,
      designation: "Security Analyst",
    },
    tags: ["Cybersecurity", "Threat Detection"],
    publishDate: "15/02/2024",
  },
  {
    title: "Saudi NCA ECC Compliance: Essential Cybersecurity Framework for Organizations",
    path: "/blogs/saudi-nca-ecc-compliance",
    paragraph:
      "The Saudi National Cybersecurity Authority (NCA) Essential Cybersecurity Controls (ECC) is a critical framework that organizations must implement to protect critical infrastructure and ensure national security.",
    image: blogImg4,
    author: {
      name: "Sarah Ahmed",
      image: blogAuthorImg1,
      designation: "Compliance Specialist",
    },
    tags: ["Compliance", "Cybersecurity", "NCA"],
    publishDate: "20/03/2024",
  },
  {
    title: "Revolutionizing Healthcare: The Imperative of Smart Hospitals",
    path: "/blogs/revolutionizing-healthcare",
    paragraph:
      "In the dynamic realm of healthcare, the need for smart hospitals is unequivocal. At Technosive, we understand that optimized healthcare systems are not only vital",
    image: blogImg1,
    author: {
      name: "Samual Joshi",
      image: blogAuthorImg4,
      designation: "Software Developer",
    },
    tags: ["Healthcare"],
    publishDate: "10/01/2024",
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default blogData;
