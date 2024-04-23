/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    dbConfig: {
      host: "localhost",
      port: 3306,
      user: "admin",
      password: "Abc1234@", // @@@
      database: "idea",
    },
    secret:
      "rp+Q/4NyXr42T+Q8/nQczQAQuoCk+XND9eoIycIO2VlrDzgZJeOqhf5YTbad7KEXGDh3YgSkns/nDby+4H0GRCu7RUBK+Av5+0UQk2rjq+VZIEujGCLS7ATTz2KnDqeHBOfoRxCeDNHN5Tjf3uxwSDD/Z3MhPuQdWn/P0qC1otFMyrgGPDmcG4NgEG4JhfSinDuUSxHSqZy7jHTbVVHPC4bn/JsU3YcnSSd3Npff29i6E6mNssdl8xJzpMlw/K5QC1eoTQ0Ou4GBT6hnI5x/JQ1zFc+E9xfag8ErNTwiPr2Gaj+B1LzHigr+pyZE9oaYhC3mKtFMmKNr3X7YUt7/OQ==",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
};

module.exports = nextConfig;
