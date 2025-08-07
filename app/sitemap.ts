export default function sitemap() {
  const base = 'https://your-domain.com'
  const now = new Date()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
