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
};

export default nextConfig;