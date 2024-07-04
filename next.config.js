/** @type {import('next').NextConfig} */

module.exports = {
  assetPrefix: '/porfolio',
  basePath: '/porfolio',
  images: {
    loader: 'imgix',
    path: 'https://arthurramires-474938407.imgix.net',
  },
}