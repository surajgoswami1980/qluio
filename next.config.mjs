/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep old URLs working after the Synteriq restructure.
  async redirects() {
    return [
      { source: "/features", destination: "/services", permanent: true },
      { source: "/pricing", destination: "/products", permanent: true },
      { source: "/demo", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
