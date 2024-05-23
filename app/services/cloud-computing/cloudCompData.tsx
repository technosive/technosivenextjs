export type CloudCompData = {
  id: number;
  icon: any;
  title: string;
  description: string;
  image: string;
};

const CloudCompData: CloudCompData[] = [
  {
    id: 1,
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
    title: "IaaS, PaaS & SaaS Management",
    description:
      "Simplify and optimize your cloud infrastructure with our IaaS, PaaS, and SaaS Management services. We specialize in managing the entire spectrum of cloud services.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-cloud"
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
          <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
        </svg>
      </>
    ),
    title: "Cloud Architecture",
    description:
      "Design a scalable and secure cloud infrastructure with our Cloud Architecture services. We tailor solutions to meet your business needs, ensuring optimal performance, flexibility, and cost-effectiveness.",
    image:
      "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bulb-filled"
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
          <path
            d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
      </>
    ),
    title: "Build & Migrate Cloud",
    description:
      "Efficiently transition to the cloud with our Build & Migrate Cloud services. We specialize in creating and migrating to cloud environments, ensuring a seamless, secure, and cost-effective transition for your business.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
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
    title: "CSPM",
    description:
      "Our Cloud Security Posture Management (CSPM) services focus on identifying and mitigating security risks, enforcing compliance, and enhancing the overall security posture of your cloud environment.",
    image:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-desktop"
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
          <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
          <path d="M7 20h10" />
          <path d="M9 16v4" />
          <path d="M15 16v4" />
        </svg>
      </>
    ),
    title: "Managed IT Services",
    description:
      "Outsource your IT management with our Managed IT Services.  Our services include proactive monitoring, maintenance, and support, allowing your organization to focus on core business activities while we manage your IT infrastructure.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-spider"
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
          <path d="M5 4v2l5 5" />
          <path d="M2.5 9.5l1.5 1.5h6" />
          <path d="M4 19v-2l6 -6" />
          <path d="M19 4v2l-5 5" />
          <path d="M21.5 9.5l-1.5 1.5h-6" />
          <path d="M20 19v-2l-6 -6" />
          <path d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </svg>
      </>
    ),
    title: "Managed Security Provider",
    description:
      "Enhance your cybersecurity with our Managed Security Provider services. We offer comprehensive security solutions, including monitoring, threat detection, and incident response.",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default CloudCompData;
