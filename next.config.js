/** @type {import('next').NextConfig} */
const isGithubActions = true
const repository       = 'portfolio'
let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = repository.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'https://arthurramires-474938407.imgix.net',
  },
}