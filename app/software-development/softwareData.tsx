export type SoftwareData = {
  id: number;
  icon: any;
  title: string;
  description: string;
  image: string;
};

const SoftwareData: SoftwareData[] = [
  {
    id: 1,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-fortress"
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
          <path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
          <path d="M7 7h0v.01" />
          <path d="M7 10h0v.01" />
          <path d="M7 13h0v.01" />
          <path d="M17 7h0v.01" />
          <path d="M17 10h0v.01" />
          <path d="M17 13h0v.01" />
        </svg>
      </>
    ),
    title: "Enterprise Application",
    description:
      "Empower your business with our Enterprise Application solutions. Tailored for efficiency and scalability, our applications streamline processes, enhance productivity, and foster seamless collaboration.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-file-code-2"
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
          <path d="M10 12h-1v5h1" />
          <path d="M14 12h1v5h-1" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        </svg>
      </>
    ),
    title: "Web/Consumer App Development",
    description:
      "Unlock your digital potential with our Web/Consumer App Development services. We specialize in creating user-friendly and engaging applications tailored to meet your specific needs.",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-report-analytics"
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
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
          <path d="M9 17v-5" />
          <path d="M12 17v-1" />
          <path d="M15 17v-3" />
        </svg>
      </>
    ),
    title: "B2B & B2C Saas",
    description:
      "Empower your business operations with our B2B and B2C SaaS solutions. As a service provider, we specialize in delivering Software as a Service (SaaS) tailored for both business-to-business (B2B) and business-to-consumer (B2C) models.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-pencil"
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
          <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
          <path d="M13.5 6.5l4 4" />
        </svg>
      </>
    ),
    title: "Legacy App Upgrade/Rewrite",
    description:
      "Revitalize your software infrastructure with our Legacy App Upgrade/Rewrite services. We specialize in modernizing outdated applications, enhancing their performance, and ensuring compatibility with the latest technologies.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-databricks"
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
          <path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" />
        </svg>
      </>
    ),
    title: "Data Migration (ETL)",
    description:
      "Streamline your data transition with our Any-DB to Any-DB data migration services. Our expertise lies in seamlessly migrating data from any database to various other databases or vice versa, ensuring data integrity and minimizing downtime.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-analytics"
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
          <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
          <path d="M7 20l10 0" />
          <path d="M9 16l0 4" />
          <path d="M15 16l0 4" />
          <path d="M8 12l3 -3l2 2l3 -3" />
        </svg>
      </>
    ),
    title: "Data Analytics & Intelligence",
    description:
      "Harness the potential of your data to uncover trends, optimize strategies, and gain a competitive edge. With our Data Analytics & Intelligence services, transform raw information into meaningful knowledge, empowering your organization to make data-driven decisions for success.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default SoftwareData;
