// /** @type {import('next').NextConfig} **/
const NextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "http://localhost",
    BACKEND_PORT: 3010,
  },
}
module.exports = NextConfig;