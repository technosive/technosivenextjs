import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl: string = `https://technosive.co.uk`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: `always`,
      priority: 1,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.8,
    },

    // * Blogs
    {
      url: `${baseUrl}/blogs/revolutionizing-healthcare`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs/retrieval-augmented-generation`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs/smart-building-monitoring`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/anti-slavery-policy`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `https://support.technosive.co.uk/`,
      lastModified: new Date(),
      changeFrequency: `monthly`,
      priority: 0.5,
    },

    // * Services
    {
      url: `${baseUrl}/services/cloud-computing`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/ai-machine-learning`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/azure-devops`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/resource-augmentation`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/azure-security`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services/application-modernization`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.6,
    },
  ];
}
