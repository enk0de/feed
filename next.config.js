const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  async redirects() {
    return [
      {
        source: '/angular/:path*',
        destination: '/articles/Angular/:path*',
        permanent: true
      },
      {
        source: '/essay/:path*',
        destination: '/articles/에세이/:path*',
        permanent: true
      },
      {
        source: '/story/:path*',
        destination: '/articles/잡다한%20이야기/:path*',
        permanent: true
      },
      {
        source: '/web/:path*',
        destination: '/articles/웹/:path*',
        permanent: true
      },
      {
        source: '/webpack/:path*',
        destination: '/articles/Webpack/:path*',
        permanent: true
      }
    ];
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: { workerThreads: true },
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
});
