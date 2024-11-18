/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   eslint: {
      ignoreDuringBuilds: true,
   },
   typescript: {
      ignoreBuildErrors: true,
   },
   images: {
      domains: [
         "avatars.githubusercontent.com",
         "lh3.googleusercontent.com",
         "res.cloudinary.com"
      ],
   }
};

export default nextConfig;
