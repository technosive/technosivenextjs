export type CyberData = {
  id: number;
  icon: any;
  title: string;
  description: string;
  image: string;
};

const CyberData: CyberData[] = [
  {
    id: 1,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-asterisk"
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
          <path d="M12 12l8 -4.5" />
          <path d="M12 12v9" />
          <path d="M12 12l-8 -4.5" />
          <path d="M12 12l8 4.5" />
          <path d="M12 3v9" />
          <path d="M12 12l-8 4.5" />
        </svg>
      </>
    ),
    title: "Cybersecurity Governance",
    description:
      "Elevate your security posture with our Cybersecurity Governance services. We specialize in designing and implementing robust governance frameworks to ensure the confidentiality, integrity, and availability of your digital assets.",
    image:
      "https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-check"
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
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </>
    ),
    title: "Cybersecurity Assurance",
    description:
      "Ensure the integrity of your digital defenses with our Cybersecurity Assurance services. We provide comprehensive assessments and strategies to safeguard your systems, networks, and data against evolving cyber threats.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-components"
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
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
      </>
    ),
    title: "Cybersecurity Compilance",
    description:
      "Navigate the complex landscape of cybersecurity compliance with our specialized services. We assist organizations in aligning their cybersecurity practices with industry regulations and standards.",
    image:
      "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-lock"
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
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
      </>
    ),
    title: "Zero Trust Security",
    description:
      "Improve your security paradigm with our Zero Trust Security services. We implement a comprehensive approach that trusts no one, inside or outside your network, and continuously verifies identity and permissions.",
    image:
      "https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-cloud-lock"
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
          <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027" />
          <path d="M8 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
          <path d="M10 15v-2a2 2 0 1 1 4 0v2" />
        </svg>
      </>
    ),
    title: "Assets & Endpoint security",
    description:
      "Safeguard your digital environment with our Assets & Endpoint Security services. We provide a holistic approach to protect your organization's assets, data, and endpoints from cybersecurity threats.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-certificate"
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
          <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
          <path d="M6 9l12 0" />
          <path d="M6 12l3 0" />
          <path d="M6 15l2 0" />
        </svg>
      </>
    ),
    title: "Cybersecurity Certification",
    description:
      "Navigate the path to cybersecurity excellence with our Cybersecurity Certification services. We specialize in guiding organizations through the certification process, ensuring adherence to industry standards and best practices.",
    image:
      "https://images.unsplash.com/photo-1494426383302-7b9d36a1a028?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default CyberData;
