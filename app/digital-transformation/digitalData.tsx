export type DigitalData = {
  id: number;
  icon: any;
  title: string;
  description: string;
  image: string;
};

const DigitalData: DigitalData[] = [
  {
    id: 1,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-cctv"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
          <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
          <path d="M12 14l.01 0" />
        </svg>
      </>
    ),
    title: "Smart Survillence",
    description:
      "As your Smart Surveillance service provider, we deploy cutting-edge AI and computer vision technologies for real-time threat detection and monitoring. ",
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-denodo"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 11h2v2h-2z" />
          <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" />
          <path d="M11 19h2v2h-2z" />
          <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" />
          <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" />
          <path d="M11 3h2v2h-2z" />
          <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" />
        </svg>
      </>
    ),
    title: "Smart Asset Management",
    description:
      "Elevate your operations with our Smart Asset Management services. Using advanced technologies like IoT and data analytics, we optimize asset tracking and maintenance.",
    image:
      "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-bank"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l18 0" />
          <path d="M3 10l18 0" />
          <path d="M5 6l7 -3l7 3" />
          <path d="M4 10l0 11" />
          <path d="M20 10l0 11" />
          <path d="M8 14l0 3" />
          <path d="M12 14l0 3" />
          <path d="M16 14l0 3" />
        </svg>
      </>
    ),
    title: "Smart Building Management",
    description:
      "Transform your infrastructure with our Smart Building Management services. Integrating IoT, sensors, and automation, we centralize control for efficient building functions.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-24-hours"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
          <path d="M4 5v4h4" />
          <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
          <path d="M18 15v2a1 1 0 0 0 1 1h1" />
          <path d="M21 15v6" />
        </svg>
      </>
    ),
    title: "Smart Utility Services",
    description:
      "Empower your utility management with our Smart Utility Services. Leveraging IoT, data analytics, and automation, we optimize the delivery of water, electricity, and gas services.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      </>
    ),
    title: "Connected Care Solution",
    description:
      "Experience a new era of healthcare with our Connected Care Solution. As a service provider, we offer an integrated system using digital technologies like telehealth and remote monitoring.",
    image:
      "https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-community"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
          <path d="M13 7l0 .01" />
          <path d="M17 7l0 .01" />
          <path d="M17 11l0 .01" />
          <path d="M17 15l0 .01" />
        </svg>
      </>
    ),
    title: "Smart Community Management",
    description:
      "Revolutionize community living with our Smart Community Management services. Leveraging advanced technologies, including IoT and data analytics, we provide integrated solutions for efficient community operations.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default DigitalData;
