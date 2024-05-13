import CogImage from "../../public/images/products/cogniz.webp";

interface ProductData {
  id: number;
  title: string;
  image: any;
  href: string;
  category: string;
  description: string;
}

export const ProductData: ProductData[] = [
  {
    id: 1,
    title: "Cogniz",
    image: CogImage,
    href: "https://cogniz.co",
    description:
      "A revolutionary Retrieval-Augmented Generation (RAG) application designed to transform the way you work",
    category: "Development",
  },
];
