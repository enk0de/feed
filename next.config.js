const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  async redirects() {
    return [
      {
        source:
          '/webpack/micro-frontends%EB%A5%BC-%EC%9C%84%ED%95%9C-webpack-5-module-federation',
        destination:
          '/articles/webpack/webpack-5-module-federation-for-micro-frontends',
        permanent: true
      },

      {
        source:
          '/story/2021%EB%85%84-1%ED%9A%8C-%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EC%82%B0%EC%97%85%EA%B8%B0%EC%82%AC-%EC%B5%9C%EC%A2%85%ED%95%A9%EA%B2%A9-%ED%9B%84%EA%B8%B0',
        destination: '/articles/story/2021-1st-jcsk-cert-review',
        permanent: true
      },
      {
        source:
          '/angular/tailwind-css%EC%99%80-angular-11.2-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nx%EC%99%80%EC%9D%98-perfect-integration-guide',
        destination:
          '/articles/angular/tailwind-css-and-angular-11-perfect-integration-guide',
        permanent: true
      },
      {
        source:
          '/angular/angular%EC%97%90%EC%84%9C-tailwind-css-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0',
        destination: '/articles/angular/angular-with-tailwind-css',
        permanent: true
      },
      {
        source:
          '/angular/angular%EC%97%90%EC%84%9C-tailwind-css-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0',
        destination: '/articles/angular/angular-with-tailwind-css',
        permanent: true
      },
      {
        source:
          '/essay/2020%EB%85%84%EC%9D%84-%EB%A7%88%EB%AC%B4%EB%A6%AC%ED%95%98%EB%A9%B0-(%ED%9A%8C%EA%B3%A0)',
        destination: '/articles/essay/retrospect-2020',
        permanent: true
      },
      {
        source:
          '/web/%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%9D%98-%EB%A1%9C%EB%93%9C-%EA%B3%BC%EC%A0%95%EA%B3%BC-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%9E%91%EB%8F%99-%EC%9B%90%EB%A6%AC',
        destination: '/articles/web/webpage-load-procedure-and-how-browser-works',
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
