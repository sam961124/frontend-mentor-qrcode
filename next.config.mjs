/**
* @type {import('next').NextConfig}
*/
const repo = 'frontend-mentor-qrcode'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      loader: 'imgix',
      path: 'https://shangenlee-878868498.imgix.net',
    },
};

export default nextConfig;