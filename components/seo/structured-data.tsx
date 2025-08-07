import Script from 'next/script'

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://your-domain.com',
    sameAs: [
      'https://github.com/yourname',
      'https://www.linkedin.com/in/yourname'
    ],
    jobTitle: 'Data Scientist | Information Systems',
    description:
      'Data Science and Information Systems portfolio with projects, research, skills, and timelines.',
  }

  return (
    <Script
      id="ld-json-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
