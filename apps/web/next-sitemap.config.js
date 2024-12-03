/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://vibes.site/',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // ignore preview pages
    if (path.includes('/preview/')) {
      console.log('ignoring path', path)
      return null
    }

    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
