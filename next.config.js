/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  unoptimized: true,
    domains: ['https://upload.wikimedia',"grdp.co" , "https://gs-post-images.grdp.co"]
  },
}

module.exports = nextConfig