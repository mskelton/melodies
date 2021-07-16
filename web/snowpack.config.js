// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  alias: {
    "~": "./src",
  },
  mount: {
    public: { static: true, url: "/" },
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh"],
}
