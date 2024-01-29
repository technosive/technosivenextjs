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
    {
      url: `${baseUrl}/blogs/revolutionizing-healthcare`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/application-modernization`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.6,
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
    {
      url: `${baseUrl}/cloud-computing`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cybersecurity`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/digital-transformation`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resource-augmentation`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/software-development`,
      lastModified: new Date(),
      changeFrequency: `weekly`,
      priority: 0.5,
    },
  ];
}
