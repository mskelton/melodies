// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  mount: { src: "/dist" },
  plugins: ["@snowpack/plugin-react-refresh"],
  routes: [
    {
      dest: "/index.html",
      match: "routes",
      src: ".*",
    },
  ],
}
