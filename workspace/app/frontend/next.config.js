/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api2/:path*',
                destination: 'http://host.docker.internal:8000/api/:path*/',
            },
        ]
    },
};
