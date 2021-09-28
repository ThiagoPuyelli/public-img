/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    URL: 'http://localhost:4500'
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}
