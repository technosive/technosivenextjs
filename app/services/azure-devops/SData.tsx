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
          className="icon icon-tabler icons-tabler-outline icon-tabler-automation"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17 22l5 -3l-5 -3z" />
        </svg>
      </>
    ),
    title: "Automation and Optimization",
    description:
      "Streamline your development process with automated workflows, reducing manual errors and increasing efficiency.",
    image:
      "https://images.unsplash.com/photo-1532186773960-85649e5cb70b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-circles-relation"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
          <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
        </svg>
      </>
    ),
    title: " CI/CD Pipelines",
    description:
      "Implement CI/CD pipelines using Azure DevOps to ensure seamless code integration, testing, and deployment. ",
    image:
      "https://images.unsplash.com/photo-1667372335879-9b5c551232e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-network"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
          <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
          <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
          <path d="M6 9h12" />
          <path d="M3 20h7" />
          <path d="M14 20h7" />
          <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M12 15v3" />
        </svg>
      </>
    ),
    title: "Enhanced Collaboration and Communication",
    description:
      "Foster better collaboration across your development teams with integrated tools and practices that break down silos.",
    image:
      "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-scale"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 20l10 0" />
          <path d="M6 6l6 -1l6 1" />
          <path d="M12 3l0 17" />
          <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
          <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
        </svg>
      </>
    ),
    title: "Scalability and Flexibility",
    description:
      "Easily scale your operations based on your business needs, ensuring optimal resource utilization.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
].map((item, index) => ({ id: index + 1, ...item }));

export default SData;
