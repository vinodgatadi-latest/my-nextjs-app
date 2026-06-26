const config = {
  services: {
    ecommerce: {
      uri: process.env.ECOMMERCE_SERVICE_URL!,
    },

    projects: {
      uri: process.env.PROJECTS_SERVICE_URL!,
    },

    retail: {
      uri: process.env.RETAIL_SERVICE_URL!,
    },

    accounts: {
      uri: process.env.ACCOUNTS_SERVICE_URL!,
    },

    notification: {
      uri: process.env.NOTIFICATION_SERVICE_URL!,
    },

    pict: {
      uri: process.env.PICT_SERVICE_URL!,
    },

    thumbnailer: {
      uri: process.env.THUMBNAILER_SERVICE_URL!,
    },

    projectrenderer: {
      uri: process.env.PROJECT_RENDERER_SERVICE_URL!,
    },

    searchservice: {
      uri: process.env.SEARCH_SERVICE_URL!,
    },

    store: {
      uri: process.env.STORE_SERVICE_URL!,
    },

    storeapi: {
      uri: process.env.STORE_API_URL!,
    },

    assetrenderer: {
      uri: process.env.ASSET_RENDERER_SERVICE_URL!,
    },

    cart: {
      uri: process.env.CART_SERVICE_URL!,
    },

    sfcommerceutils: {
      uri: process.env.SFCOMMERCE_UTILS_SERVICE_URL!,
    },
  },
};

export default config;