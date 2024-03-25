import { Brand } from "@/types/brand";
import accuKnoxLogo from "../../public/images/brands/AccuKnox/accuknox-logo.webp";
import fortinetLogo from "../../public/images/brands/Fortinet/fortinet-logo.svg";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Fortinet",
    href: "/partners/fortinet",
    image: fortinetLogo,
    imageLight: fortinetLogo,
  },
  {
    id: 2,
    name: "AccuKnox",
    href: "/partners/accuknox",
    image: accuKnoxLogo,
    imageLight: accuKnoxLogo,
  },
];

export default brandsData;
