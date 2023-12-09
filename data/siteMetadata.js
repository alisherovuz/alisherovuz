/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Nurbekning sayti',
  author: 'Nurbek Alisherov',
  headerTitle: 'alisherov.uz',
  description: "Assalomu alaykum! Mening saytimga xush kelibsiz. Bu sayt orqali mening fikrlarim va turli xil ma'lumotlar olishingiz mumkin",
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://alisherov.uz',
  siteRepo: 'https://github.com/alisherovuz/alisherovuz',
  socialBanner: '/static/images/twitter-card.png',
  email: 'uzalisherov@gmail.com',
  github: 'https://github.com/alisherovuz',
  twitter: 'https://linkedin.com/in/alisherov-uz-370070281',
  youtube: 'https://youtube.com/@edugrands',
  linkedin: 'https://www.linkedin.com/in/alisherov-uz-370070281/',
  threads: 'https://threads.net/@nurbek.alisherov.uz',
  locale: 'en-US',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-7LG3NNV50C',
    },
  },
  newsletter: {
    provider: 'mailchimp',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
