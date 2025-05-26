const { PLACE_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/place",
        destination: `${PLACE_URL}/place`,
      },
      {
        source: "/place/:path+",
        destination: `${PLACE_URL}/blog/:path+`,
      },
    ];
  },
};

module.exports = nextConfig;
