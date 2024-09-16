/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: true,
      },
    ]
  },
  webpack:config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
}

export default nextConfig
