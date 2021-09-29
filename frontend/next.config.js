/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    URL: 'http://localhost:4500',
    STORE_PASS: 'alfredotercero1234'
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}
