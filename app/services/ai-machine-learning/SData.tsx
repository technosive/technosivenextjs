export type SData = {
  id: number;
  icon?: any;
  title: string;
  description: string;
  image: string;
};

const SData: SData[] = [
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-ai"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 16v-6a2 2 0 1 1 4 0v6" />
          <path d="M8 13h4" />
          <path d="M16 8v8" />
        </svg>
      </>
    ),
    title: "Custom AI Solutions",
    description:
      "We develop bespoke AI solutions tailored to your unique business challenges and objectives, from predictive analytics to intelligent automation.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-robot"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
          <path d="M12 2v2" />
          <path d="M9 12v9" />
          <path d="M15 12v9" />
          <path d="M5 16l4 -2" />
          <path d="M15 14l4 2" />
          <path d="M9 18h6" />
          <path d="M10 8v.01" />
          <path d="M14 8v.01" />
        </svg>
      </>
    ),
    title: "Machine Learning Models",
    description:
      "Our experts build and deploy machine learning models that can analyze vast amounts of data, providing actionable insights and improving decision-making processes.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-lock"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
      </>
    ),
    title: "Private AI Solutions",
    description:
      "We specialize in creating private AI solutions that ensure your data remains secure and compliant with industry regulations, while still leveraging the full power of AI.",
    image:
      "https://images.unsplash.com/photo-1674027444454-97b822a997b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default SData;
